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

//        $userValidator = User::validate($request->all());
//        if ($userValidator->fails()) {
//            return response()->json([
//                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
//                'message' => $userValidator->messages(),
//            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
//        }


        try {
            DB::beginTransaction();

            $user = User::create([
                'first_name' => $validator->validated()['first_name'],
                'middle_name' => $validator->validated()['middle_name'],
                'last_name' => $validator->validated()['last_name'],
                'email' => $validator->validated()['email'],
                'role' => 'judge',
                'password' => Hash::make($validator->validated()['last_name'])
            ]);

            $judge = Judge::create([
                'profile_image_url' => 'No Image URl available',
                'organization' => $validator->validated()['organization'],
                'position' => $validator->validated()['position'],
                'expertise' => $validator->validated()['expertise'],
                'phone_number' => $validator->validated()['phone_number'],
                'role' => 'judge',
                'bio' => $validator->validated()['bio'],
                'created_by' => auth()->id() ?: 1,
                'user_id' => $user->id,
                'event_id' => $validator->validated()['event_id'] // The selected event id, (i.e )
            ]);

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'data' => [$judge],
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating the user. Please try again later.',
                'message' => $e->getMessage()],
                ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }


    public function show($id)
    {
        $judge = Judge::find($id);

        if ($judge){
            return \response()->json([
                'data' => $judge,
                'message' => 'Successful'
            ]);
        }

        return response()->json([
            'status' => ResponseAlias::HTTP_NOT_FOUND,
            'error' => Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND],
        ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
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
