<?php

namespace App\Http\Controllers;

use App\Http\Resources\JudgeResource;
use App\Models\ArtistProfile;
use App\Models\Judge;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class JudgeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return
     */
    public function index()
    {
        $judgesProfiles = Judge::all();
        return JudgeResource::collection($judgesProfiles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param
     * @return
     */
    public function store(Request $request)
    {
        $validator = Judge::validate($request->all());
        if ($validator->fails()){
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        $userValidator = User::validate($request->all());
        if ($userValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $userValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }


        try {

            DB::beginTransaction();
            $user = User::create($userValidator->safe()->merge(['role' => 'judge', 'password' => Hash::make($userValidator->validated()['password'])])->all());
            $judge = Judge::create($validator->safe()->merge(['user_id' => $user->id, 'created_by' => auth()->id() ?: 1])->all());

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'data' => $user,
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating the user. Please try again later.',
                'message' => $e->getMessage()],
                ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Judge  $judge
     * @return \Illuminate\Http\Response
     */
    public function show(Judge $judge)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Judge  $judge
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Judge $judge)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Judge  $judge
     * @return \Illuminate\Http\Response
     */
    public function destroy(Judge $judge)
    {
        //
    }
}
