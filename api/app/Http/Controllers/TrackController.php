<?php

namespace App\Http\Controllers;

use App\Helper\ImageManager;
use App\Http\Resources\TrackResource;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    use ImageManager;
    public function index()
    {
        $tracks = Track::all();
        return TrackResource::collection($tracks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        $validator = Track::validate($request->all());

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
            if ($file = $request->file('track_artwork_url')) {
                $fileData = $this->uploads($file, $path, "tracks/");

                $data = [
                    'title' => $validator->validated()['title'],
                    'track_number' => $validator->validated()['track_number'],
                    'duration' => $validator->validated()['duration'],
                    'genre_id' => $validator->validated()['genre_id'],
                    'featured_artists' => $request->input('featured_artists'), // array
                    'composer' => $validator->validated()['composer'],
                    'producer' => $validator->validated()['producer'],
                    'release_date' => $validator->validated()['release_date'],
                    'album_id' => $validator->validated()['album_id'],
                    'artist_id' => $validator->validated()['artist_id'],
                    'track_artwork_url' => 'storage/' . $fileData['filePath'],
                    'boomplay_music_link' => $request->input('boomplay_music_link'),
                    'deezer_music_link' => $request->input('deezer_music_link'),
                    'spotify_music_link' => $request->input('spotify_music_link'),
                    'apple_music_link' => $request->input('apple_music_link'),
                    'youtube_music_link' => $request->input('youtube_music_link'),
                    'created_by' => auth()->id() ?: 1,
                ];
                $track = Track::create($data);

                DB::commit();
                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'message' => 'Track created successfully',
                    'data' => new TrackResource($track),
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
            }
            DB::rollBack();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Unable to upload track artwork',
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Something went wrong while adding track. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function show(Track $track)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Track $track)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function destroy(Track $track)
    {
        //
    }
}
