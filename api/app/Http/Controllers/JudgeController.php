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
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $data = [
                'user_information_id' => $validator->validated()['user_information_id'],
                'organization' => $validator->validated()['organization'],
                'position' => $validator->validated()['position'],
                'expertise' => $validator->validated()['expertise'],
                'bio' => $validator->validated()['bio'],
                'created_by' => auth()->id() ?: 1,
            ];

            $judge = Judge::create($data);

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'data' => new JudgeResource($judge),
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Something went wrong while creating the Judge. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }


    public function show($id)
    {
        $judge = Judge::find($id);
        if (!isset($judge)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Resource not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        return new JudgeResource($judge);
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
        dd($judge);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $judge = Judge::find($id);
        if ($judge) {
            Judge::destroy($id);
            return response()->json([
                'message' => 'Judge removed successful',
                'status' => ResponseAlias::HTTP_OK,
            ], ResponseAlias::HTTP_OK);

        }

        return response()->json([
            'message' => 'Judge with id '.$id.' Not Found',
            'status' => ResponseAlias::HTTP_NOT_FOUND,
        ], ResponseAlias::HTTP_NOT_FOUND);
    }
}
