<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function counts(Request $request)
    {

        //Implement queries to return The data below.

        $data = [
            'users' => 222,
            'active_events' => 2,
            'genres' => 17,
            'categories' => 58,
            'artists' => 12
        ];
        return $data;
    }
}
