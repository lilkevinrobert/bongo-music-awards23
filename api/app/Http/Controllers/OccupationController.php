<?php

namespace App\Http\Controllers;

use App\Http\Resources\OccupationResource;
use App\Models\Occupation;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class OccupationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $occupations = Occupation::all();
        return OccupationResource::collection($occupations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $occupationValidator = Occupation::validate($request->all());
        if ($occupationValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $occupationValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        //Creating New Occupation
        try {
            DB::beginTransaction();

            $occupation = Occupation::create([
                'name' => $occupationValidator->validated()['name'],
                'description' => $occupationValidator->validated()['description'],
            ]);

            if ($occupation) {
                DB::commit();
                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'message' => 'Occupation created successfully.',
                    'data' => new OccupationResource($occupation),
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
            }
            DB::rollBack();
            return response()->json([
                'status' => ResponseAlias::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'Something went wrong, while creating Occupation.',
            ])->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);

        } catch (QueryException|\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Something went wrong while creating new Occupation. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Occupation $occupation
     */
    public function show($id)
    {
        $occupation = Occupation::find($id);
        if (!isset($occupation)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Occupation not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new OccupationResource($occupation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function update(Request $request, $id)
    {
        $occupation = Occupation::find($id);
        if (!isset($occupation)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Occupation not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        $occupation->update($request->only(['name', 'description']));
        return new OccupationResource(Occupation::find($id));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $occupation = Occupation::find($id);
        if (!isset($occupation)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Occupation not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $occupation->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Occupation deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }
}
