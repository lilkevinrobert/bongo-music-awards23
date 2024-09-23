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
        'phone',
        'address_id',
        'user_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'first_name' => ['required', 'min:2', 'max:50'],
            'middle_name' => ['nullable', 'min:2', 'max:50'],
            'last_name' => ['required', 'min:2', 'max:50'],
            'username' => ['required', 'min:2', 'max:50', 'unique:users,username'],
            'email' => ['required','email', 'unique:users,email'],
            'user_role' => ['required'],
            'password' => ['required'],
            'gender' => ['required'], // TODO enum validation of MALE, FEMALE
            'date_of_birth' => ['required'], //TODO change it to type date
            'profile_picture_url' => ['nullable', 'image', 'mimes:jpeg,png,jpg'],
            'phone' => ['required'], //TODO phone number validation
            'address_id' => ['nullable', 'exists:addresses,id'],
            'user_id' => ['nullable', 'exists:users,id'],
        ];

        $nice_names = [ # Friendly names
            'first_name' => 'Firstname',
            'last_name' => 'Lastname',
            'password' => 'Password',
            'username' => 'Username',
            'email' => 'Email',
            'user_role' => 'User Role',
            'date_of_birth' => 'Date Of Birth',
            'profile_picture_url' => 'Profile Picture',
            'phone' => 'Phone Number',
            'address_id' => 'Address',
            'user_id' => 'User',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function getFullNameAttribute(){return ucfirst($this->first_name) . " " . ucfirst($this->middle_name) . " " . ucfirst($this->last_name);}
}
