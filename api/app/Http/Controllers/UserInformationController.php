<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\UserResource;
use App\Models\Address;
use App\Models\Category;
use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class UserInformationController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $userInformationValidator = UserInformation::validate($request->all());
        $addressValidator = Address::validate($request->all());

        // handle user information's validation failure
        if ($userInformationValidator->fails() && $addressValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => [$userInformationValidator->messages(), $addressValidator->messages()],
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }


        // address information validation
        $addressValidator = Address::validate($request->all());
        if ($addressValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $userInformationValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        // user information validation
        $userInformationValidator = UserInformation::validate($request->all());
        if ($userInformationValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $userInformationValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            //Creating new user
            $user = User::create([
                'username' => $userInformationValidator->validated()['username'],
                'email' => $userInformationValidator->validated()['email'],
                'password' => Hash::make($userInformationValidator->validated()['password']),
            ]);

            if ($user) {
                //Validate user address information's
                $address = [
                    'region_id' => $userInformationValidator->validated()['region_id'],
                    'district_id' => $userInformationValidator->validated()['district_id'],
                    'ward_shehia_id' => $userInformationValidator->validated()['ward_shehia_id'],
                    'street_id' => $userInformationValidator->validated()['street_id'],
                    'street_road_id' => $userInformationValidator->validated()['street_road_id'],
                    'building_house_number' => $userInformationValidator->validated()['building_house_number'],
                    'physical_address' => $userInformationValidator->validated()['physical_address'],
                    'postal_address' => $userInformationValidator->validated()['postal_address'],
                    'postal_address_city' => $userInformationValidator->validated()['postal_address_city'],
                    'address_type' => $userInformationValidator->validated()['address_type'],
                    'residence_type' => $userInformationValidator->validated()['residence_type'],
                ];
                $address = Address::create($address);

                // saving image to the database returning the image_url

                if ($address) {
                    $user_info_data = [
                        'first_name' => $userInformationValidator->validated()['first_name'],
                        'middle_name' => $userInformationValidator->validated()['middle_name'],
                        'last_name' => $userInformationValidator->validated()['last_name'],
                        'gender' => $userInformationValidator->validated()['gender'],
                        'date_of_birth' => $userInformationValidator->validated()['date_of_birth'],
                        'profile_picture_url' => $userInformationValidator->validated()['profile_picture_url'],
                        'phone_number' => $userInformationValidator->validated()['phone_number'],
                        'address_id' => $address->id,
                        'user_id' => $user->id,
                    ];

                    //Create user information
                    $user_data = UserInformation::create($user_info_data);

                    if ($user_data) {
                        DB::commit();
                        return response()->json([
                            'status' => ResponseAlias::HTTP_CREATED,
                            'message' => 'User created successfully',
//                            'data' => new CategoryResource($categories),
                            'data' => [$user_data],
                        ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);
                    }
                }
            }


            DB::rollBack();
            return response()->json([
                'status' => ResponseAlias::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'Something went wrong, while creating user information',
            ])->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
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
     * @param \App\Models\UserInformation $userInformation
     * @return \Illuminate\Http\Response
     */
    public function show(UserInformation $userInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\UserInformation $userInformation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserInformation $userInformation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\UserInformation $userInformation
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserInformation $userInformation)
    {
        //
    }
}
