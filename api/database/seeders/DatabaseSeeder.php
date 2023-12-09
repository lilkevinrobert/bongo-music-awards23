<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'firstname' => 'user',
            'lastname' => 'user',
            'email' => 'user@bma.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        // Alternatively, create a user using the DB facade
        DB::table('users')->insert([
            'firstname' => 'admin',
            'lastname' => 'admin',
            'email' => 'admin@bma.com',
            'role' => 'admin',
            'password' => Hash::make('password'),
        ]);
    }
}
