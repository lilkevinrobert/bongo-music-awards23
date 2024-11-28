<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardGenreResource;
use App\Http\Resources\AwardNominationResource;
use App\Http\Resources\AwardResource;
use App\Http\Resources\CategoryResource;
use App\Models\ArtistNomination;
use App\Models\Award;
use App\Models\AwardGenre;
use App\Models\AwardNomination;
use App\Models\Category;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardNominationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $awardNominations = AwardNomination::all();

    }

    public function existAwardNomination($awardId): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make([
            'award_id' => $awardId],
            ['award_id' => 'required|exists:awards,id']);

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        $exists = AwardNomination::where('award_id', $awardId)->exists();

        if ($exists) {

            $data = DB::select('SELECT award_genres.genre_id AS genre_id, genres.name AS genre, award_id, categories.id as category_id, categories.name AS category, category_type_id FROM genres
                                        INNER JOIN award_genres ON genres.id = award_genres.genre_id
                                        INNER JOIN categories ON award_genres.genre_id = categories.genre_id
                                        WHERE award_genres.award_id = ?',[$awardId]);

////            // Group the data by genre_id
//            $grouped = collect($result)->groupBy('genre_id');
////
////            // Convert back to array if needed
//            $groupedArray = $grouped->toArray();

            $groupedByGenre = [];

            foreach ($data as $item) {
                $genreId = $item->genre_id;

                if (!isset($groupedByGenre[$genreId])) {
                    $groupedByGenre[$genreId] = [
                        'genre' => $item->genre,
                        'award_id' => $item->award_id,
                        'genre_id'=> $item->genre_id,
                        'categories' => []
                    ];
                }
                $groupedByGenre[$genreId]['categories'][] = [
//                    'award_id' => $item->award_id,
                    'category_id' => $item->category_id,
                    'category' => $item->category,
                    'category_type_id' => $item->category_type_id
                ];
            }

            return response()->json([
                'status' => ResponseAlias::HTTP_OK,
                'message' => 'Award Nomination Exists',
                'data' => array_values($groupedByGenre),
//                'data' => $groupedByGenre,
            ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
        }

        return response()->json([
            'status' => ResponseAlias::HTTP_NOT_FOUND,
            'message' => 'Award Nomination Does Not Exist',
        ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function updateStatus(Request $request)
    {
        $validator = AwardNomination::validate($request->all());
        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $award = AwardNomination::updateOrCreate(
                ['award_id' => $validator->validated()['award_id']],
                [
                    'start_date' => $validator->validated()['start_date'],
                    'end_date' => $validator->validated()['end_date'],
                    'status' => $validator->validated()['status'],
                ]
            );

            //TODO check status is active, then pull data for artist nominations

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Nomination Updated successfully',
                'data' => $award
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating Award Nomination. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }

    public function nominationCategories(Request $request, $awardId)
    {

        // Award Validations
        $validator = Validator::make([
            'award_id' => $awardId],
            ['award_id' => 'required|exists:awards,id']);

        // Handle Validation Failures
        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        // Retrieving Nomination Categories
        $nominationCategories = ArtistNomination::where('award_id', $awardId)->get();


        $data = [
            'award' => new AwardResource(Award::find($awardId)),
            'categories' => new CategoryResource(Category::find($nominationCategories->pluck('category_id')->toArray())),
        ];


        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Nomination Categories Retrieved successfully',
            'data' => $data,
            'data1' => new AwardNominationResource($nominationCategories)
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);


    }


    public function awardNomination($awardId)
    {
        $awards = AwardNomination::where('award_id', $awardId)->first();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Award Retrieved successfully',
            'data' => $awards
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\AwardNomination $awardNomination
     * @return \Illuminate\Http\Response
     */
    public function show(AwardNomination $awardNomination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\AwardNomination $awardNomination
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AwardNomination $awardNomination)
    {
        //
    }


    public function nominationCategory(Request $request, $awardId, $categoryId)
    {
        $validator = Validator::make([
            'award_id' => $awardId,
            'category_id' => $categoryId
        ],
            ['award_id' => 'required|exists:awards,id|exists:artist_nominations,award_id',
                'category_id' => 'required|exists:categories,id|exists:artist_nominations,category_id']
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        $result =  DB::select('SELECT  name,stage_name,  record_label, artist_id,category_item_id FROM (SELECT record_label, stage_name,artist_profiles.id as artist_id, category_item_id, category_id FROM artist_nominations -- WHERE award_id = 2 AND category_id = 23
                INNER JOIN  artist_profiles ON artist_profiles.id = artist_nominations.artist_id
                WHERE award_id = ? AND category_id = ?) AS tbl_one
                INNER JOIN categories ON tbl_one.category_id = categories.id', [$awardId, $categoryId]);

        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Award Retrieved successfully',
            'data' => $result
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\AwardNomination $awardNomination
     * @return \Illuminate\Http\Response
     */
    public function destroy(AwardNomination $awardNomination)
    {
        //
    }
}
