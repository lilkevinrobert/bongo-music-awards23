<?php

namespace App\Http\Controllers;

use App\Http\Resources\RegionResource;
use App\Models\region;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class RegionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $regions = Region::all();
        return RegionResource::collection($regions);
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\region  $region
     */
    public function show($regionId)
    {
        $region = Region::find($regionId);
        if (!isset($region)){
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Region not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $regions =  Region::with('districts')->find($regionId);
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Region districts',
            'data' => new RegionResource($regions),
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }


}
