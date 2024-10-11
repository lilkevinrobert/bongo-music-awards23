<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Judge extends Model
{
    protected $table = 'judges';

    protected $fillable = [
        'organization',
        'position',
        'expertise',
        'bio',
        'created_by'
    ];

    use HasFactory;

    public $timestamps = true;

    public static function validate($input, $id = null)
    {
        $rules = [
            # place-holder for user validation rules
            'user_information_id' => ['required', 'exists:user_informations,id'],
            'organization' => ['required'],
            'position' => ['required'],
            'expertise' => ['required'],
            'bio' => ['required'],
        ];

        $nice_names = [ # Friendly names
            'user_information_id' => 'User Information',
            'bio' => 'Judge biography'
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
