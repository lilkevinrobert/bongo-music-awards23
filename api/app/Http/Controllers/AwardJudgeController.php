<?php

namespace App\Http\Controllers;

use App\Http\Resources\AwardJudgeResource;
use App\Http\Resources\AwardSponsorResource;
use App\Models\Award;
use App\Models\AwardJudge;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardJudgeController extends Controller
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

        $validator = AwardJudge::validate($request->all());
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
            $judges = [];

            foreach ($validator->validated()['judge_id'] as $judge) {
                AwardJudge::create([
                    'award_id' => $awardId,
                    'judge_id' => $judge,
                ]);

                $judges[] = $judge;
            }

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Award Judge(s) created successfully',
                'data' => new AwardJudgeResource($judges),
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
     * @param  \App\Models\AwardJudge $int
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

        $award = Award::with('judges')->findOrFail($id);
        return new AwardJudgeResource($award);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AwardJudge  $awardJudge
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AwardJudge $awardJudge)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AwardJudge  $awardJudge
     * @return \Illuminate\Http\Response
     */
    public function destroy(AwardJudge $awardJudge)
    {
        //
    }
}
