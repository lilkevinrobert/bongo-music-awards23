<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class EventsController extends Controller
{

    public function index()
    {
        $events = Event::all();
        return response()->json([
            'status' => 200,
            'message' => 'Retrieved successful!',
            'data' => $events
        ]);
    }


    public function store(Request $request) : JsonResponse
    {
        $event = Event::create([
            'code' => Str::random(4),
            'name' => $request->name,
        ]);

        return response()->json([
            'status' => '201',
            'message' => 'Successful created!',
            'data' => $event
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return $event;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }


    public function eventGenres(Request $request, $eventId){
        $genres = Event::find($eventId)->genres;
        dd($genres);
    }

    public function eventGenresCategories(Request $request)
    {

    }
}
