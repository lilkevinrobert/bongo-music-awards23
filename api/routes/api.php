<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistProfilesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AwardGenresController;
use App\Http\Controllers\AwardJudgeController;
use App\Http\Controllers\AwardNominationController;
use App\Http\Controllers\AwardSponsorController;
use App\Http\Controllers\CategoryTypeController;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\NominationVoteController;
use App\Http\Controllers\OccupationController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\StreetController;
use App\Http\Controllers\WardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\JudgeController;
use App\Http\Controllers\AdminController;
use \App\Http\Controllers\GenresController;
use \App\Http\Controllers\CategoriesController;
use \App\Http\Controllers\UserInformationController;
use \App\Http\Controllers\RegionController;
use \App\Http\Controllers\AwardController;

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


Route::group(['prefix' => 'auth'], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    //Logout
    Route::post('logout', [AuthController::class, 'logout']);

    Route::middleware(['role:ADMIN'])->group(function () {
        Route::get('tests', [AuthController::class, 'test']);
    });
//
//    Route::middleware('role:artist')->group(function () {
//        Route::get('/artist/profile', [ArtistController::class, 'profile']);
//    });
//
//    Route::middleware('role:judge')->group(function () {
//        Route::get('/judge/review', [JudgeController::class, 'review']);
//    });
//
//    Route::middleware('role:vote')->group(function () {
//        Route::get('/vote/cast', [VoteController::class, 'cast']);
//    });

});


//Configurations
Route::get('/clear-cache', [ConfigController::class, 'cacheClear']);


/**
 * Admin dashboard, item counts
 */
Route::group(['prefix' => 'v1'], function () {

    //GENRES & CATEGORIES END-POINT
    Route::apiResource('genres', GenresController::class);
    Route::apiResource('categories', CategoriesController::class);
    // ALBUMS
    Route::apiResource('albums', AlbumController::class);

    // CATEGORY TYPE END-POINT
    Route::get('category_types', [CategoryTypeController::class, 'index']);
    Route::get('category_types/{category_type}', [CategoryTypeController::class, 'show']);

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

    //USER INFORMATION END POINTS
    Route::group(['prefix' => 'user_informations'], function () {
        Route::get('/', [UserInformationController::class, 'index']);
        Route::post('/', [UserInformationController::class, 'store']);
        Route::patch('/', [UserInformationController::class, 'update']);
    });

    // ARTIST ENDPOINTS.
    Route::group(['prefix' => 'artists'], function ($request) {

        //Create artist profile
        Route::post('/profiles', [ArtistProfilesController::class, 'store']);
        Route::get('/', [ArtistProfilesController::class, 'index']);
        Route::get('/{artistId}', [ArtistProfilesController::class, 'show']);


    });

    // JUDGES ENDPOINTS
    Route::group(['prefix' => 'judges'], function () {
        Route::get('/', [JudgeController::class, 'index']);
        Route::post('/', [JudgeController::class, 'store']);
        Route::get('/{id}', [JudgeController::class, 'show']);
        Route::delete('/{id}', [JudgeController::class, 'destroy']);
    });

    // SPONSORS APIS.
    Route::apiResource('sponsors', SponsorController::class);

    // AWARDS GENRE APIS.
    Route::group(['prefix' => 'awards'], function () {
        // Create Award  genres
        Route::post('/{awardId}/genres', [AwardGenresController::class, 'store']);
        // Get All Genres for a Specific Award
        Route::get('/{awardId}/genres', [AwardGenresController::class, 'show']);

        // Create Award Sponsors
        Route::post('/{awardId}/sponsors', [AwardSponsorController::class, 'store']);
        // Get All Genres for a Specific Award
        Route::get('/{awardId}/sponsors', [AwardSponsorController::class, 'show']);

        // Create Award Judges
        Route::post('/{awardId}/judges', [AwardJudgeController::class, 'store']);
        // Get All Judges for specific award.
        Route::get('/{awardId}/judges', [AwardJudgeController::class, 'show']);

        // Active Events and Awards
        Route::get('/active', [AwardController::class, 'activeAwards']);
        Route::get('/closed', [AwardController::class, 'inactiveAwards']);
    });

    // AWARDS APIS.
    Route::apiResource('awards', AwardController::class);

    // NOMINATION END POINTS
    Route::group(['prefix' => 'nominations'], function () {
        Route::post('/update_status', [AwardNominationController::class, 'updateStatus']);
        Route::get('/award/{awardId}', [AwardNominationController::class, 'awardNomination']);
        Route::get('/{awardId}/status', [AwardNominationController::class, 'existAwardNomination']); // TODO update this endpoint
        Route::get('/{awardId}/categories', [AwardNominationController::class, 'nominationCategories']);
        Route::get('/{awardId}/categories/{categoryId}', [AwardNominationController::class, 'nominationCategory']);

        // Nomination Votes
        Route::post('/{nominationId}/votes', [NominationVoteController::class, 'store']);
        Route::get('/{nominationId}/votes', [NominationVoteController::class, 'show']);
    });

    // VOTES
    Route::group(['prefix' => 'votes'], function () {


    });

});

