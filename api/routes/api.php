<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ArtistProfilesController;
use App\Http\Controllers\NominatorsController;
use App\Http\Controllers\JudgeController;
use App\Http\Controllers\AdminController;
use \App\Http\Controllers\GenresController;
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
//
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * Admin dashboard, item counts
 */
Route::group(['prefix'=>'admin'], function () {


    /**
     * Admin dashboard, item counts
     */
    Route::group(['prefix' => 'counts'], function () {
        Route::get('/',[AdminController::class,'counts']);
    });
});

Route::group(['prefix'=>'awards'], function () {

    /**
     * Events (Awards) end-points.
    */
    Route::get('/',[EventsController::class, 'index']); // Available events.
    Route::post('/',[EventsController::class,'store']);
    Route::get('/{eventId}', [EventsController::class, 'show']); // Read specific event.
    Route::get('/{eventId}/genres/{genreId}/categories', []); // all available categories of a specific genre



    /**
     * Genres end-points. (genres)
     */

    Route::get('/{eventId}/genres',[EventsController::class,'eventGenres']);

});


Route::group(['prefix'=>'artists'], function () {
    Route::post('/register',[ArtistProfilesController::class,'registerUser']); // Self registration of artist
    Route::get('/',[ArtistProfilesController::class,'index']); //All available artist in the system
    Route::get('/{id}',[ArtistProfilesController::class,'show']); //All available artist in the system
    Route::post('/',[ArtistProfilesController::class,'store']); //All available artist in the system

    Route::group(['prefix'=>'info'], function () {
        Route::get('/{id}',[ArtistProfilesController::class,'getArtist']);
    });
});

/**
 * Genres
 */
Route::group(['prefix'=>'v1'], function () {
//    Route::get('/',[GenresController::class, 'index']);
//    Route::post('/',[GenresController::class,'store']);
//    Route::get('/{genreId}', [GenresController::class, 'show']);
//    Route::patch('/{genreId}', [GenresController::class, 'update']);
//    Route::delete('/{genreId}', [GenresController::class, 'destroy']);

    Route::apiResource('genres', GenresController::class);
});



// Nominators Endpoints
Route::group(['prefix'=>'nominators'], function () {
    Route::get('/',[NominatorsController::class,'index']); //All available nominators in the system
    Route::get('/{id}',[NominatorsController::class, 'show']);
    Route::delete('/{id}',[NominatorsController::class, 'destroy']);
    Route::put('/{id}',[NominatorsController::class, 'update']);
});

// Judges Endpoints
Route::group(['prefix'=>'judges'], function () {
    Route::get('/',[JudgeController::class,'index']); //All available judges in the system
    Route::post('/',[JudgeController::class,'store']);
    Route::get('/{id}',[JudgeController::class,'show']);
    Route::delete('/{id}',[JudgeController::class,'destroy']);
});


Route::middleware(['auth:sanctum'])->group(function () {
//    Route::get('/events', function () {
//
//    });
});
