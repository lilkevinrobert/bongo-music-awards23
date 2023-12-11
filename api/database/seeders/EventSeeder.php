<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::create([
            'code' => Str::random(4),
            'name' => 'Bongo Music Awards 2022',
        ]);

        Event::create([
            'code' => Str::random(4),
            'name' => 'Bongo Music Awards 2023',
        ]);

        Event::create([
            'code' => Str::random(4),
            'name' => 'Nyama choma Festival',
        ]);
    }
}
