<?php

namespace App\Http\Controllers;

use App\Http\Resources\NominatorResource;
use App\Models\Nominator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Nominator  $norminator
     * @return \Illuminate\Http\Response
     */
    public function show(Nominator $norminator)
    {
        //
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
