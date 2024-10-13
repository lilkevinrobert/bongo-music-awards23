<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class ConfigController extends Controller
{
    public function cacheClear(){
        Artisan::call('config:cache');
        Artisan::call('optimize:clear');
        Artisan::call('cache:clear');
        Artisan::call('route:clear');
        return 'DONE';
    }
}
