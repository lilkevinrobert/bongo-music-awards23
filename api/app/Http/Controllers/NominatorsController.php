<?php

namespace App\Http\Controllers;

use App\Http\Resources\NominatorResource;
use App\Models\Nominator;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class NominatorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return
     */
    public function index()
    {
        $nominators = Nominator::all();
        return NominatorResource::collection($nominators);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        $nominator = Nominator::find($id);
        if($nominator) {
            $user = User::where('id', $nominator->user_id)
                ->select(['first_name', 'middle_name', 'last_name','email'.'role'])
                ->limit(1)
                ->first();

            $data  = [
                'id' => $nominator->id,
                'first_name' => $user->first_name,
                'middle_name' => $user->middle_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'organization' => $nominator->organization,
                'position' => $nominator->position,
                'expertise' => $nominator->expertise,
                'profile_image_url' => $nominator->profile_image_url,
                'phone_number' => $nominator->phone_number,
                'role' => $user->role,
                'bio' => $nominator->bio,
                'user_id' => (int) $nominator->user_id,
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
     * @param  \App\Models\Nominator  $norminator
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Nominator $norminator)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Nominator  $norminator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nominator $norminator)
    {
        //
    }
}
