<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardGenreResource;
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

        if ($request->has('status') && $request->input('status') == "OPEN") {

            $validator = AwardNomination::validate($request->all());
            if ($validator->fails()) {
                return response()->json([
                    'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                    'message' => $validator->messages(),
                ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
            }

            try {
                DB::beginTransaction();

                $data = [
                    'award_id' => $validator->validated()['award_id'],
                    'start_date' => $validator->validated()['start_date'],
                    'end_date' => $validator->validated()['end_date'],
                    'status' => $validator->validated()['status'],
                ];

                $awardNomination = AwardNomination::create($data);

                DB::commit();
                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'message' => 'Nomination Opened successfully',
//                    'data' => new AwardGenreResource($genres), pulling artist categories for now will be empty
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

            } catch (QueryException|\Exception $e) {
                return response()->json([
                    'error' => 'Something went wrong while creating Award genres. Please try again later.',
                    'message' => $e->getMessage()
                ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
            }


        }


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
