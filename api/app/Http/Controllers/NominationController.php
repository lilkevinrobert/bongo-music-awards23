<?php

namespace App\Http\Controllers;

use App\Models\Normination;
use Illuminate\Http\Request;

class NominationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nominations  = Normination::all();

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
     * @param  \App\Models\Normination  $normination
     * @return \Illuminate\Http\Response
     */
    public function show(Normination $normination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Normination  $normination
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Normination $normination)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Normination  $normination
     * @return \Illuminate\Http\Response
     */
    public function destroy(Normination $normination)
    {
        //
    }
}
