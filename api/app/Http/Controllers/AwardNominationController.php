<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardGenreResource;
use App\Http\Resources\AwardResource;
use App\Models\Award;
use App\Models\AwardGenre;
use App\Models\AwardNomination;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
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
