<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Occupation extends Model
{
    use HasFactory;

    protected $table = 'occupations';
    protected $fillable = [
        'name',
        'description'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'name' => ['required'],
            'description' => ['required'],
        ];

        $nice_names = [];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }


}
