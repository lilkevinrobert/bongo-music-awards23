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
            //TODO check status is active, then pull data for artist nominations

            $artist_nomination = ArtistNomination::where('award_id', $awardId)->get();

//            $artist_nominations = ArtistNomination::with(['artist', 'award', 'genre', 'category'])->where('award_id', $awardId)->get();
            $artist_nominations = ArtistNomination::with(['artist','award', 'genre','category'])->where('award_id', $awardId)->get();

            return response()->json([
                'status' => ResponseAlias::HTTP_OK,
                'message' => 'Award Nomination Exists',
                'data' => $artist_nominations
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

    public function nominationCategories(Request $request, $awardId) {

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
