<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class ArtistOccupation extends Model
{
    use HasFactory;
    protected $table = 'artist_occupations';

    protected $fillable = [
        'artist_id',
        'occupation_id',
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'artist_id' => ['required', 'exists:artist_profiles,id'],
            'occupation_id' => ['required', 'exists:occupations,id'],
        ];

        $nice_names = [ # Friendly names
            'artist_id' => 'Artist',
            'occupation_id' => 'Occupation',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }


}
