<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ArtistProfilesController;
use App\Http\Controllers\NominatorsController;
use App\Http\Controllers\JudgeController;
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
//Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix'=>'events'], function () {

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

});




Route::group(['prefix'=>'nominators'], function () {
    Route::get('/',[NominatorsController::class,'index']); //All available nominators in the system

});


Route::group(['prefix'=>'judges'], function () {
    Route::get('/',[JudgeController::class,'index']); //All available judges in the system

});


Route::middleware(['auth:sanctum'])->group(function () {
//    Route::get('/events', function () {
//
//    });
});
