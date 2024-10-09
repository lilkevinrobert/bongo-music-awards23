<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Auth;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AuthController extends Controller
{

    public function test(){
        return auth()->user();
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'user_role' => ['required', 'in:ADMIN,VOTER,JUDGE,ARTIST'],
            'password' => ['required', 'confirmed', 'min:8', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        try {
            DB::beginTransaction();

            $data = [
                'username' => $validator->validated()['username'],
                'email' => $validator->validated()['email'],
                'user_role' => $validator->validated()['user_role'],
                'password' => Hash::make($validator->validated()['password']),
            ];

            $user = User::create($data);
            DB::commit();

            return response()->json([
                'status' => ResponseAlias::HTTP_CREATED,
                'data' => $user,
            ])->setStatusCode(ResponseAlias::HTTP_CREATED, Response::$statusTexts[ResponseAlias::HTTP_CREATED]);

        } catch (QueryException|\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while creating account. Please try again later.',
                'message' => $e->getMessage()],
                ResponseAlias::HTTP_INTERNAL_SERVER_ERROR)->setStatusCode(ResponseAlias::HTTP_INTERNAL_SERVER_ERROR, Response::$statusTexts[ResponseAlias::HTTP_INTERNAL_SERVER_ERROR]);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email'],
            'password' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNPROCESSABLE_ENTITY,
                'message' => $validator->messages(),
            ])->setStatusCode(ResponseAlias::HTTP_UNPROCESSABLE_ENTITY, Response::$statusTexts[ResponseAlias::HTTP_UNPROCESSABLE_ENTITY]);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => ResponseAlias::HTTP_UNAUTHORIZED,
                'message' => "Invalid credentials",
            ])->setStatusCode(ResponseAlias::HTTP_UNAUTHORIZED, Response::$statusTexts[ResponseAlias::HTTP_UNAUTHORIZED]);
        }

        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request)
    {

    }

}
