<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Judge extends Model
{
    protected $table = 'judges';

    protected $fillable = [
        'profile_image_url',
        'user_id',
        'event_id',
        'organization',
        'position',
        'expertise',
        'phone_number',
        'role',
        'bio',
        'created_by'
    ];

    use HasFactory;

    public $timestamps = true;


    public static function validate($input, $id = null)
    {
        $rules = [
            # place-holder for user validation rules
            'first_name' => ['required', 'min:2', 'max:50'],
            'middle_name' => ['nullable'],
            'last_name' => ['required', 'min:2', 'max:50'],
            'email' => ['required','email'],

            # place-holder for judge validation rules
            'organization' => ['required', 'min:2', 'max:50'],
            'bio' => ['required',],
            'phone_number' => ['required'],
            'position' => ['required'],
            'expertise' => ['required'],
            'event_id' => ['required']
        ];

        $nice_names = [ # Friendly names
            'bio' => 'Judge biography',
            'phone_number' => 'Phone number',
            'event_id' => 'event id'
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
