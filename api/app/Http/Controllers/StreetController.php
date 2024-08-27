<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Street;
use App\Models\Ward;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class StreetController extends Controller
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
     * @param  \App\Models\Street  $street
     */

    public function show($wardId)
    {
        $ward = Ward::find($wardId);
        if (!isset($ward)){
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'District not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $ward_streets =  Ward::with('streets')->find($wardId);
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Ward Streets',
            'data' => $ward_streets,
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

}
