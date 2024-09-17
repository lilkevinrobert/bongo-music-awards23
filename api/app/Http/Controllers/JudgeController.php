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
//        $judgesProfiles = Judge::all();
//        return JudgeResource::collection($judgesProfiles);
        return ['data'=> []];
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

            //saving the image to the database.

            $judge = Judge::create([
                'organization' => $validator->validated()['organization'],
                'position' => $validator->validated()['position'],
                'expertise' => $validator->validated()['expertise'],
                'phone_number' => $validator->validated()['phone_number'],
                'bio' => $validator->validated()['bio'],
                'created_by' => auth()->id() ?: 1,
                'user_id' => 1,
                'event_id' => $validator->validated()['event_id'] // The selected event id, (i.e )
            ]);

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'data' => [$judge],
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            DB::rollBack();
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

            $user = User::where('id', $judge->user_id)
                ->select(['first_name', 'middle_name', 'last_name','email','gender'])
                ->limit(1)
                ->first();

            $data  = [
                'id' => $judge->id,
                'first_name' => $user->first_name,
                'middle_name' => $user->middle_name,
                'last_name' => $user->last_name,
                'gender' => $user->gender,
                'email' => $user->email,
                'organization' => $judge->organization,
                'position' => $judge->position,
                'expertise' => $judge->expertise,
                'profile_image_url' => $judge->profile_image_url,
                'phone_number' => $judge->phone_number,
                'role' => $judge->role,
                'bio' => $judge->bio,
                'user_id' => $judge->user_id,
                'event' => 'Bongo Music Awards 2024' // retrieving the event selected
            ];

            return \response()->json([
                'data' => $data,
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
