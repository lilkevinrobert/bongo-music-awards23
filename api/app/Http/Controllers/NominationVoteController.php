<?php

namespace App\Http\Controllers;

use App\Models\AwardNomination;
use App\Models\NominationVote;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class NominationVoteController extends Controller
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
    public function store(Request $request)
    {

        $validator = NominationVote::validate($request->all());

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        //Check Nomination status
        $nomination = AwardNomination::where('award_id', $validator->validated()['award_id'])->first();
        if ($nomination->status == 'CLOSED') { //use enums
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => 'Nomination Current Closed',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\NominationVote $nominationVote
     * @return \Illuminate\Http\Response
     */
    public function show(NominationVote $nominationVote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\NominationVote $nominationVote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NominationVote $nominationVote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\NominationVote $nominationVote
     * @return \Illuminate\Http\Response
     */
    public function destroy(NominationVote $nominationVote)
    {
        //
    }
}
