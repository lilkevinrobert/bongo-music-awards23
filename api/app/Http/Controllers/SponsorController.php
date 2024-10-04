<?php

namespace App\Http\Controllers;

use App\Http\Resources\SponsorResource;
use App\Models\Sponsor;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use App\Helper\ImageManager;

class SponsorController extends Controller
{
    use ImageManager;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sponsors = Sponsor::all();
        return SponsorResource::collection($sponsors);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {

        $validator = Sponsor::validate($request->all());

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();
            $path = storage_path('images/');
            !is_dir($path) && mkdir($path, 0777, true);

            //TODO saving the image to the database.
            if ($file = $request->file('logo')) {
                $fileData = $this->uploads($file, $path);

                $sponsor = Sponsor::create([
                    'sponsor_name' => $validator->validated()['sponsor_name'],
                    'logo' => 'storage/' . $fileData['filePath'],
                    'award_id' => $validator->validated()['award_id'],
                    'link' => $validator->validated()['link'],
                ]);

                DB::commit();
                return response()->json([
                    'status' => ResponseAlias::HTTP_CREATED,
                    'data' => [$sponsor],
                ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
            }

        } catch (QueryException|\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Something went wrong while creating the Sponsor. Please try again later.',
                'message' => $e->getMessage()],
                ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Sponsor $sponsor
     */
    public function show($id)
    {
        $sponsor = Sponsor::find($id);
        if (!isset($sponsor)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Sponsor not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new SponsorResource($sponsor);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Sponsor $sponsor
     */
    public function update(Request $request, $id)
    {
        $sponsor = Sponsor::find($id);
        if (!isset($sponsor)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Sponsor not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        //TODO updating the image logo of the sponsor

        $sponsor->update($request->only(['sponsor_name', 'award_id', 'link']));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Sponsor $sponsor
     */
    public function destroy($id)
    {
        $sponsor = Sponsor::find($id);
        if (!isset($sponsor)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Sponsor not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $sponsor->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Sponsor deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);
    }
}
