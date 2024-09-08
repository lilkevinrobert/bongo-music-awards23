<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistProfileResource;
use App\Models\ArtistOccupation;
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
//        $artistProfiles = ArtistProfile::all();
//        return ArtistProfileResource::collection($artistProfiles);
        return ["data" => []];
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request, $id)
    {
        $profileValidator = ArtistProfile::validate($request->all());
        if ($profileValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $profileValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            foreach ($profileValidator->validated()['artist_occupations'] as $artistOccupation) {
                ArtistOccupation::create([
                    'artist_id' => $id,
                    'occupation_id' => $artistOccupation
                ]);
            }


        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating Artist profile. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }






    }

    /**
     * Display the specified resource.
     *
     */
    public function show(ArtistProfile $artistProfile, $id)
    {
        $artistProfiles = ArtistProfile::find($id);
        if (!isset($artistProfiles)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Resource not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        return new ArtistProfileResource($artistProfiles);
    }


    public function getArtist($id)
    {

        // USE SQL JOINS use (user_id)
        $user = User::select(['first_name', 'middle_name', 'last_name', 'email'])
            ->where('id', $id)
            ->limit(1)
            ->first();

        $artist_profile = ArtistProfile::select(['stage_name', 'phone_number', 'bio'])
            ->where('user_id', $id)
            ->limit(1)
            ->first();

        if (!isset($user) && !isset($artist_profile)) {
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
