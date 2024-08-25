<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class UserInformation extends Model
{
    use HasFactory;

    protected $table = 'user_informations';

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'date_of_birth',
        'profile_picture_url',
        'status',
        'phone_number',
        'address_id',
        'user_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'first_name' => ['required', 'min:2', 'max:50'],
            'middle_name' => ['nullable', 'min:2', 'max:50'],
            'last_name' => ['required', 'min:2', 'max:50'],
            'username' => ['required', 'min:2', 'max:50'],
            'email' => ['required','email'],
            'password' => ['required'],
            'gender' => ['required'], // enum validation of MALE, FEMALE
            'date_of_birth' => ['required'], //change it to type date
            'profile_picture_url' => ['required'],
            'phone_number' => ['required'], // phone number validation
            'address_id' => ['required'], // exists address table
            'user_id' => ['required'], //exists user id
        ];

        $nice_names = [ # Friendly names
            'first_name' => 'Firstname',
            'last_name' => 'Lastname',
            'password' => 'Password',
            'username' => 'Username',
            'email' => 'Email',
            'date_of_birth' => 'Date Of Birth',
            'profile_picture_url' => 'Profile Picture',
            'phone_number' => 'Phone Number',
            'address_id' => 'Address',
            'user_id' => 'User',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
