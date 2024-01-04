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
        $rules = [ # place-holder for validation rules
            'organization' => ['required', 'min:2', 'max:50'],
            'bio' => ['required',],
            'phone_number' => ['required'],
            'position' => ['required'],
            'expertise' => ['required'],
            'role' => ['required'],
        ];

        $nice_names = [ # Friendly names
            'bio' => 'Judge biography',
            'phone_number' => 'Phone number',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
