<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardSponsorResource;
use App\Models\Award;
use App\Models\AwardSponsor;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardSponsorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $awards = Award::with('sponsors')->get();
        return AwardSponsorResource::collection($awards);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
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

        if ((int)$request->route('awardId') !== (int) $request->input('award_id')) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Route Parameter Award Id do not match',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $validator = AwardSponsor::validate($request->all());
        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $awardId = $validator->validated()['award_id'];
            $sponsors = [];

            foreach ($validator->validated()['sponsor_id'] as $sponsor) {
                AwardSponsor::create([
                    'award_id' => $awardId,
                    'sponsor_id' => $sponsor,
                ]);

                $sponsors[] = $sponsor;
            }

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Award Sponsor(s) created successfully',
                'data' => new AwardSponsorResource($sponsors),
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating Award Sponsors. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AwardSponsor  $awardSponsor
     */
    public function show($id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Award not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $award = Award::with('sponsors')->findOrFail($id);
        return new AwardSponsorResource($award);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AwardSponsor  $awardSponsor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AwardSponsor $awardSponsor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AwardSponsor  $awardSponsor
     * @return \Illuminate\Http\Response
     */
    public function destroy(AwardSponsor $awardSponsor)
    {
        //
    }
}
