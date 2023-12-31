<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistProfileResource;
use App\Models\ArtistProfile;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use \Illuminate\Database\QueryException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use function PHPUnit\Framework\isEmpty;


class ArtistProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $artistProfiles = ArtistProfile::all();
        return ArtistProfileResource::collection($artistProfiles);
    }

    public function registerUser(Request $request){
        $validator = User::validate($request->all());

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $data = [
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'role' => 'Artist',
                'password' => Hash::make($request->input('password')),
            ];

            $user = User::create($data);

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
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {

        /**
         * CREATING ARTIST Profile
         * Validating artist inputs
         *
         */
        $validator = ArtistProfile::validate($request->all());
        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        /**
         * CREATING ARTIST USER
         * Validating user inputs
         */

        $userValidator = User::validate($request->all());
        if ($userValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $userValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {

            DB::beginTransaction();
            $user = User::create($userValidator->safe()->merge(['role' => 'artist', 'password' => Hash::make($userValidator->validated()['last_name'])])->all());
            $artist_profile = ArtistProfile::create($validator->safe()->merge(['user_id' => $user->id, 'created_by' => auth()->id() ?: 1])->all());

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
     */
    public function show(ArtistProfile $artistProfile, $id)
    {
        $artistProfiles = ArtistProfile::find($id);
        if(!isset($artistProfiles)){
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Resource not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        return new ArtistProfileResource($artistProfiles);
    }


    public function getArtist($id) {

        // USE SQL JOINS use (user_id)
        $user = User::select(['first_name','middle_name','last_name','email'])
            ->where('id',$id)
            ->limit(1)
            ->first();

        $artist_profile = ArtistProfile::select(['stage_name','phone_number','bio'])
            ->where('user_id', $id)
            ->limit(1)
            ->first();

        if (!isset($user) && !isset($artist_profile)){
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Resource not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $data = [
            'first_name' => $user['first_name'],
            'middle_name' => $user['middle_name'],
            'last_name' => $user['last_name'],
            'email' => $user['email'],
            'stage_name' => $artist_profile['stage_name'],
            'phone_number' => $artist_profile['phone_number'],
            'bio' => $artist_profile['bio']
        ];

        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'data' => $data
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ArtistProfile $artistProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ArtistProfile $artistProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArtistProfile $artistProfile)
    {
        //
    }
}
