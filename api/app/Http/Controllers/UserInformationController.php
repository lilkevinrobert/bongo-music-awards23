<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\UserInformationResource;
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
     */
    public function index()
    {
        $user_information = UserInformation::all();
        return UserInformationResource::collection($user_information);
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

        // Handle user information's and address validation failure
        if ($userInformationValidator->fails() && $addressValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => [$userInformationValidator->messages(), $addressValidator->messages()],
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        // User information validation
        $userInformationValidator = UserInformation::validate($request->all());
        if ($userInformationValidator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $userInformationValidator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        // Address information validation
        $addressValidator = Address::validate($request->all());
        if ($addressValidator->fails()) {
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
                'user_role' => $userInformationValidator->validated()['user_role'],
                'password' => Hash::make($userInformationValidator->validated()['password']),
            ]);

            if ($user) {
                //Validate user address information's
                $address = [
                    'region_id' => $addressValidator->validated()['region_id'],
                    'district_id' => $addressValidator->validated()['district_id'],
                    'ward_shehia_id' => $addressValidator->validated()['ward_shehia_id'],
                    'street_id' => $addressValidator->validated()['street_id'],
                    'building_house_number' => $addressValidator->validated()['building_house_number'],
                    'postal_address' => $addressValidator->validated()['postal_address'],
                    'address_type' => $addressValidator->validated()['address_type'],
                    'residence_type' => $addressValidator->validated()['residence_type'],
                ];
                $address = Address::create($address);

                // saving image to the database returning the image_url
                // TODO image saving to the database

                if ($address) {
                    $user_info_data = [
                        'first_name' => $userInformationValidator->validated()['first_name'],
                        'middle_name' => $userInformationValidator->validated()['middle_name'],
                        'last_name' => $userInformationValidator->validated()['last_name'],
                        'gender' => $userInformationValidator->validated()['gender'],
                        'date_of_birth' => $userInformationValidator->validated()['date_of_birth'],
                        'profile_picture_url' => 'No image defined yet',
                        'phone' => $userInformationValidator->validated()['phone'],
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
                            'data' => new UserInformationResource($user_data),
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
                'error' => 'Something went wrong while creating new User. Please try again later.',
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
