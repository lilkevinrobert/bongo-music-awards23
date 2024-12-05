<?php

namespace App\Http\Controllers;

use App\Helper\ImageManager;
use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AlbumController extends Controller
{
    use ImageManager;

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $albums = Album::all();
        return AlbumResource::collection($albums);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $validator = Album::validate($request->all());

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();
            $path = storage_path('images/');
            !is_dir($path) && mkdir($path, 0777, true);

            //Saving the image to the database.
            if ($file = $request->file('album_artwork_url')) {
                $fileData = $this->uploads($file, $path, "albums/");

                $data = [
                    'album_title' => $validator->validated()['album_title'],
                    'artist_id' => $validator->validated()['artist_id'],
                    'release_date' => $validator->validated()['release_date'],
                    'genre_id' => $validator->validated()['genre_id'],
                    'album_artwork_url' => 'storage/' . $fileData['filePath'],
                    'summary' => $validator->validated()['summary'],
                    'boomplay_music_link' => $request->input('boomplay_music_link'),
                    'deezer_music_link' => $request->input('deezer_music_link'),
                    'spotify_music_link' => $request->input('spotify_music_link'),
                    'apple_music_link' => $request->input('apple_music_link'),
                    'youtube_music_link' => $request->input('youtube_music_link'),
                    'created_by' => auth()->id() ?: 1,
                ];
                $album = Album::create($data);

                DB::commit();
                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'message' => 'Album created successfully',
                    'data' => new AlbumResource($album),
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
            }
            DB::rollBack();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Unable to upload album artwork',
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Something went wrong while creating new album. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Album $album
     */
    public function show($id)
    {
        $album = Album::find($id);
        if (!isset($album)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Album not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new AlbumResource($album);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Album $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Album $album
     */
    public function destroy($id)
    {
        $album = Album::find($id);
        if (!isset($album)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Album not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $album->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Album deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);

    }
}
