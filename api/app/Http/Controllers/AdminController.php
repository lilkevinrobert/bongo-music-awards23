<?php

namespace App\Http\Controllers;

use App\Models\ArtistProfile;
use App\Models\Award;
use App\Models\Category;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function counts(Request $request)
    {
        $data = [
            'users' => User::count(),
            'active_events' => Award::where('status', 'active')->count(),
            'genres' => Genre::count(),
            'categories' => Category::count(),
            'artists' => ArtistProfile::count()
        ];
        return $data;
    }
}
