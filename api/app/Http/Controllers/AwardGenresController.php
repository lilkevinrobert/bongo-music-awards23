<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardGenreResource;
use App\Http\Resources\GenreResource;
use App\Models\Award;
use App\Models\AwardGenre;
use App\Models\AwardGenres;
use App\Models\Category;
use App\Models\Genre;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardGenresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        if ((int) $request->route('awardId') !== (int) $id) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Route Parameter Award Id do not match',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $validator = AwardGenre::validate($request->all());
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



// TODO Not yet tested.
public
function getAwardGenres($awardId)
{
    $award = Award::find($awardId);
    if (!isset($award)) {
        return response()->json([
            'status' => ResponseAlias::HTTP_NOT_FOUND,
            'message' => 'Award not found',
        ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
    }

    //retrieving the
    $genres = Award::with('awardGenres')->where(['award_id' => $awardId])->get();
//        $genres =  Genre::with('categories')->find($genreId);

    return response()->json([
        'status' => ResponseAlias::HTTP_OK,
        'message' => 'Award genres',
        'data' => $genres,
    ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
}


/**
 * Display the specified resource.
 *
 * @param \App\Models\AwardGenres $awardGenres
 * @return \Illuminate\Http\Response
 */
public
function show(AwardGenres $awardGenres)
{

}

/**
 * Update the specified resource in storage.
 *
 * @param \Illuminate\Http\Request $request
 * @param \App\Models\AwardGenres $awardGenres
 * @return \Illuminate\Http\Response
 */
public
function update(Request $request, AwardGenres $awardGenres)
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
