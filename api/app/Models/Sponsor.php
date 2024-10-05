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
        'link'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'sponsor_name' => ['required'],
            'logo' => ['required','image', 'mimes:jpeg,png,jpg'],
            'link' => ['required'],
        ];

        $nice_names = [];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function awards()
    {
        return $this->belongsToMany(Award::class, 'award_sponsors', 'sponsor_id', 'award_id');
    }


}
