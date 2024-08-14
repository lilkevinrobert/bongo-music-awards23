<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'first_name' => 'user',
            'middle_name' => 'user',
            'last_name' => 'user',
            'email' => 'user@bma.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        // Alternatively, create a user using the DB facade
        DB::table('users')->insert([
            'first_name' => 'admin',
            'middle_name' => 'user',
            'last_name' => 'admin',
            'email' => 'admin@bma.com',
            'role' => 'admin',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Omary',
            'middle_name' => 'Ally',
            'last_name' => 'Mwanga',
            'email' => 'marioo@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Ali',
            'last_name' => 'Kiba',
            'email' => 'alikiba@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Naseeb',
            'middle_name' => 'Abdul',
            'last_name' => 'Juma',
            'email' => 'diamond_platnumz@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Raymond',
            'middle_name' => 'Shaban',
            'last_name' => 'Raymond',
            'email' => 'rayvanny@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);

        \App\Models\User::create([
            'first_name' => 'Amani',
            'last_name' => 'Mussa',
            'email' => 'lava_lava@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Rajab',
            'middle_name'=>'Abdul',
            'last_name' => 'Kahali',
            'email' => 'harmonize@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'first_name' => 'Vanessa',
            'middle_name'=>'Hau',
            'last_name' => 'Mdee',
            'email' => 'vanessa_mdee@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);



        /**
         * Nominators Seeding.
         * */
        \App\Models\User::create([
            'first_name' => 'Juma',
            'middle_name'=>'Hassan',
            'last_name' => 'Mbarook',
            'email' => 'jmbarook@gmail.com',
            'role' => 'nominator',
            'password' => Hash::make('password'),
        ]);

        \App\Models\User::create([
            'first_name' => 'Farid',
            'middle_name'=>'Hashimu',
            'last_name' => 'Mbonde',
            'email' => 'faridmbonde@gmail.com',
            'role' => 'nominator',
            'password' => Hash::make('password'),
        ]);


    }
}
