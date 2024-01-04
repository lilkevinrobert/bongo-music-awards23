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
            'firstname' => 'user',
            'middlename' => 'user',
            'lastname' => 'user',
            'email' => 'user@bma.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        // Alternatively, create a user using the DB facade
        DB::table('users')->insert([
            'firstname' => 'admin',
            'middlename' => 'user',
            'lastname' => 'admin',
            'email' => 'admin@bma.com',
            'role' => 'admin',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Omary',
            'middlename' => 'Ally',
            'lastname' => 'Mwanga',
            'email' => 'marioo@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Ali',
            'lastname' => 'Kiba',
            'email' => 'alikiba@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Naseeb',
            'middlename' => 'Abdul',
            'lastname' => 'Juma',
            'email' => 'diamond_platnumz@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Raymond',
            'middlename' => 'Shaban',
            'lastname' => 'Raymond',
            'email' => 'rayvanny@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);

        \App\Models\User::create([
            'firstname' => 'Amani',
            'lastname' => 'Mussa',
            'email' => 'lava_lava@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Rajab',
            'middlename'=>'Abdul',
            'lastname' => 'Kahali',
            'email' => 'harmonize@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);


        \App\Models\User::create([
            'firstname' => 'Vanessa',
            'middlename'=>'Hau',
            'lastname' => 'Mdee',
            'email' => 'vanessa_mdee@gmail.com',
            'role' => 'artist',
            'password' => Hash::make('password'),
        ]);



        /**
         * Nominators Seeding.
         * */
        \App\Models\User::create([
            'firstname' => 'Juma',
            'middlename'=>'Hassan',
            'lastname' => 'Mbarook',
            'email' => 'jmbarook@gmail.com',
            'role' => 'nominator',
            'password' => Hash::make('password'),
        ]);

        \App\Models\User::create([
            'firstname' => 'Farid',
            'middlename'=>'Hashimu',
            'lastname' => 'Mbonde',
            'email' => 'faridmbonde@gmail.com',
            'role' => 'nominator',
            'password' => Hash::make('password'),
        ]);


    }
}
