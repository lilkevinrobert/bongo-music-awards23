<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardGenreResource;
use App\Models\Award;
use App\Models\AwardGenre;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardGenresController extends Controller
{
    /**
     * Display a listing of the resource
     */
    public function index()
    {
        $awards = Award::with('genres')->get();
        return AwardGenreResource::collection($awards);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request, $id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Award not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $validator = AwardGenre::validate($request->all());
        if ((int)$request->route('awardId') !== (int) $request->input('award_id')) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Route Parameter Award Id do not match',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $awardId = $validator->validated()['award_id'];
            $genres = [];

            foreach ($validator->validated()['genre_id'] as $genre) {
                AwardGenre::create([
                    'award_id' => $awardId,
                    'genre_id' => $genre,
                ]);

                $genres[] = $genre;
            }

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Award Genre(s) created successfully',
                'data' => new AwardGenreResource($genres),
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating Award genres. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     */
    public function show($id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Award not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $award = Award::with('genres')->findOrFail($id);
        return new AwardGenreResource($award);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\AwardGenres $awardGenres
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AwardGenres $awardGenres)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\AwardGenres $awardGenres
     * @return \Illuminate\Http\Response
     */
    public
    function destroy(AwardGenres $awardGenres)
    {
        //
    }
}
