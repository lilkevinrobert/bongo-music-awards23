<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Sponsor extends Model
{
    use HasFactory;

    protected $table = 'sponsors';

    protected $fillable = [
        'sponsor_name',
        'logo',
        'award_id',
        'link'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'sponsor_name' => ['required'],
            'logo' => ['required','image', 'mimes:jpeg,png,jpg'],
            'award_id' => ['required', 'exists:awards,id'],
            'link' => ['required'],
        ];

        $nice_names = [];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }


}
