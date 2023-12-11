<?php

namespace App\Http\Controllers;

use App\Models\ArtistProfile;
use Illuminate\Http\Request;

class ArtistProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index()
    {
        $artists = ArtistProfile::all();
        return response()->json([
            'status' => 200,
            'data' => $artists
        ]);
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArtistProfile  $artistProfile
     * @return \Illuminate\Http\Response
     */
    public function show(ArtistProfile $artistProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ArtistProfile  $artistProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ArtistProfile $artistProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArtistProfile  $artistProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArtistProfile $artistProfile)
    {
        //
    }
}
