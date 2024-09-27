<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class AwardGenre extends Model
{
    use HasFactory;

    protected $table = 'award_genres';
    protected $fillable = [
        'award_id',
        'genre_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'award_id' => 'required|exists:awards,id',
            'genre_id' => 'required|exists:genres,id|array',
            'genre_id.*' => 'distinct|integer|exists:genres,id'
        ];

        $nice_names = [ # Friendly names
            'award_id' => 'Award',
            'genre_id' => 'Genre',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
