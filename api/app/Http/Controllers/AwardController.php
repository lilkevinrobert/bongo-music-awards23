<?php

namespace App\Http\Controllers;

use App\Helper\ImageManager;
use App\Http\Resources\AwardResource;
use App\Models\Award;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AwardController extends Controller
{
    use ImageManager;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $awards = Award::all();
        return AwardResource::collection($awards);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $validator = Award::validate($request->all());
        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();
            $path = storage_path('images/');
            !is_dir($path) && mkdir($path, 0777, true);

            // Saving image to the database.
            if ($file = $request->file('poster_image_url')) {
                $fileData = $this->uploads($file, $path, "awards/");

                $data = [
                    'title' => $validator->validated()['title'],
                    'location' => $validator->validated()['location'],
                    'poster_image_url' => 'storage/' . $fileData['filePath'],
                ];

                $award = Award::create($data);
                DB::commit();

                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'message' => 'Award created successfully',
                    'data' => new AwardResource($award),
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
            }

        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating Award. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'error' => 'Award not found.',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new AwardResource($award);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Award $award
     */
    public function update(Request $request, $id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Award not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        // TODO image update
        $award->update($request->only(['title', 'location', 'poster_image_url']));
        return new AwardResource($award);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Award $award
     */
    public function destroy($id)
    {
        $award = Award::find($id);
        if (!isset($award)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Award not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        $award->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Award deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

    public function activeAwards(Request $request)
    {
        $awards = Award::where('status', 'ACTIVE')->get();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Award Retrieved successfully',
            'data' => AwardResource::collection($awards)
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }

    public function inactiveAwards(Request $request)
    {
        $awards = Award::where('status', 'CLOSED')->get();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Award Retrieved successfully',
            'data' => AwardResource::collection($awards)
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }
}
