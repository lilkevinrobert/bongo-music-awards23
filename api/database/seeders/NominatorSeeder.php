<?php

namespace Database\Seeders;

use App\Models\Nominator;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class NominatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {

        /**
         * Nominators Seeding.
         * */

//        User::create([
//            'firstname' => 'Juma',
//            'middlename' => 'Hassan',
//            'lastname' => 'Mbarook',
//            'email' => 'jmbarook@gmail.com',
//            'role' => 'nominator',
//            'password' => Hash::make('password'),
//        ]);
//
//        User::create([
//            'firstname' => 'Farid',
//            'middlename' => 'Hashimu',
//            'lastname' => 'Mbonde',
//            'email' => 'faridmbonde@gmail.com',
//            'role' => 'nominator',
//            'password' => Hash::make('password'),
//        ]);


        /**
         * The intention is that the nominator attended two nomination events (jmbarook@gmail.com)
         */
        Nominator::create([
            'user_id' => User::where('email', 'jmbarook@gmail.com')->select('id')->first()['id'],
            'event_id' => 1,
            'phone_number' => '+255 788 456 123',
        ]);

        Nominator::create([
            'user_id' => User::where('email', 'jmbarook@gmail.com')->select('id')->first()['id'],
            'event_id' => 2,
            'phone_number' => '+255 788 456 123',
        ]);

        Nominator::create([
            'user_id' => User::where('email', 'faridmbonde@gmail.com')->select('id')->first()['id'],
            'event_id' => 1,
            'phone_number' => '+255 788 456 123',
        ]);
    }
}
