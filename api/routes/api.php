<?php

use App\Http\Controllers\ArtistProfilesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OccupationController;
use App\Http\Controllers\StreetController;
use App\Http\Controllers\WardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\NominatorsController;
use App\Http\Controllers\JudgeController;
use App\Http\Controllers\AdminController;
use \App\Http\Controllers\GenresController;
use \App\Http\Controllers\CategoriesController;
use \App\Http\Controllers\UserInformationController;
use \App\Http\Controllers\RegionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * Admin dashboard, item counts
 */
Route::group(['prefix' => 'v1'], function () {

    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);


    Route::apiResource('genres', GenresController::class);
    Route::apiResource('categories', CategoriesController::class);


    Route::get('genres/{genreId}/categories', [GenresController::class, 'getGenreCategories']);
    Route::get('genres/category/all', [GenresController::class, 'getAllGenreCategories']);
    Route::group(['prefix' => 'admin'], function () {
        Route::apiResource('occupations', OccupationController::class);
        Route::group(['prefix' => 'counts'], function () {
            Route::get('/', [AdminController::class, 'counts']);
        });
    });


    //ADDRESS END POINTS
    Route::group(['prefix' => 'addresses'], function () {
        Route::get('regions', [RegionController::class, 'index']);
        Route::get('regions/{regionId}/districts', [RegionController::class, 'show']);
        Route::get('districts/{districtId}/wards', [DistrictController::class, 'show']);
        Route::get('wards/{wardId}/streets', [WardController::class, 'show']);
        Route::get('streets/{streetId}/roads', [StreetController::class, 'show']);
    });

    //
    Route::group(['prefix' => 'user_informations'], function () {
        Route::get('/', [UserInformationController::class, 'index']);
        Route::post('/', [UserInformationController::class, 'store']);


//        Route::post('/register',[ArtistProfilesController::class,'registerUser']); // Self registration of artist
//        Route::get('/',[ArtistProfilesController::class,'index']); //All available artist in the system
//        Route::get('/{id}',[ArtistProfilesController::class,'show']); //All available artist in the system
//        Route::post('/',[ArtistProfilesController::class,'store']); //All available artist in the system
//
//        Route::group(['prefix'=>'info'], function () {
//            Route::get('/{id}',[ArtistProfilesController::class,'getArtist']);
//        });
    });
    Route::group(['prefix' => 'artists'], function ($request) {

        //Create artist profile
        Route::post('/{userId}/profiles', [ArtistProfilesController::class, 'store']);
        Route::get('/', [ArtistProfilesController::class,'index']);
    });

    // Judges Endpoints
    Route::group(['prefix' => 'judges'], function () {
        Route::get('/', [JudgeController::class, 'index']); //All available judges in the system
        Route::post('/', [JudgeController::class, 'store']);
        Route::get('/{id}', [JudgeController::class, 'show']);
        Route::delete('/{id}', [JudgeController::class, 'destroy']);
    });
});

Route::group(['prefix' => 'awards'], function () {

    /**
     * Events (Awards) end-points.
     */
    Route::get('/', [EventsController::class, 'index']); // Available events.
    Route::post('/', [EventsController::class, 'store']);
    Route::get('/{eventId}', [EventsController::class, 'show']); // Read specific event.
    Route::get('/{eventId}/genres/{genreId}/categories', []); // all available categories of a specific genre


    /**
     * Genres end-points. (genres)
     */

    Route::get('/{eventId}/genres', [EventsController::class, 'eventGenres']);

});



Route::middleware(['auth:sanctum'])->group(function () {
//    Route::get('/events', function () {
//
//    });
});
