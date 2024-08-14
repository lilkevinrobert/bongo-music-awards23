<?php

namespace App\Http\Controllers;

use App\Http\Resources\GenreResource;
use App\Models\Genre;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class GenresController extends Controller
{
    /**
     * Display a listing of the genre resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return GenreResource::collection(Genre::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Genre::validate($request->only('name'));

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $data = ['name' => $validator->validated()['name']];
            $genre = Genre::create($data);

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Genre created successfully',
                'data' => new GenreResource($genre),
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating new genre. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\GenreModel $genreModel
     */
    public function show($id)
    {
        $genre = Genre::find($id);
        if (!isset($genre)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Genre not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new GenreResource($genre);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Genre $genre
     */
    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);
        if (!isset($genre)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Genre not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $genre->update($request->only('name'));
        return new GenreResource(Genre::find($id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Genre $genre
     */
    public function destroy($id)
    {
        $genre = Genre::find($id);
        if (!isset($genre)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Genre not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $genre->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Genre deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);

    }
}
