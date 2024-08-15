<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\Genre;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        $validator = Category::validate($request->only(['name','genre_id']));

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $data = [
                'name' => $validator->validated()['name'],
                'genre_id' => $validator->validated()['genre_id']
            ];
            $category = Category::create($data);

            DB::commit();
            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'message' => 'Genre category created successfully',
                'data' => new CategoryResource($category),
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating new category. Please try again later.',
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     */
    public function show($id)
    {
        $category = Category::find($id);
        if (!isset($category)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Category not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if (!isset($category)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Category not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $category->update($request->only(['name','genre_id']));
        return new CategoryResource(Category::find($id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        if (!isset($category)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_NOT_FOUND,
                'message' => 'Category not found',
            ])->setStatusCode(ResponseAlias::HTTP_NOT_FOUND, Response::$statusTexts[ResponseAlias::HTTP_NOT_FOUND]);
        }

        $category->delete();
        return response()->json([
            'status' => ResponseAlias::HTTP_OK,
            'message' => 'Category deleted successfully',
        ])->setStatusCode(ResponseAlias::HTTP_OK, Response::$statusTexts[ResponseAlias::HTTP_OK]);

    }
}
