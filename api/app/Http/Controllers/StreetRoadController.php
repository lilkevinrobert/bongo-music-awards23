<?php

namespace App\Http\Controllers;

use App\Models\Street;
use App\Models\StreetRoad;
use App\Models\Ward;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class StreetRoadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StreetRoad  $streetRoad
     */
    public function show($streetId)
    {
        $street = Street::find($streetId);
        if (!isset($street)){
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Street not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $ward_streets =  Ward::with('streets')->find($streetId);
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Ward Streets',
            'data' => $ward_streets,
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

}
