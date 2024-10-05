<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Award extends Model
{
    use HasFactory;

    protected $table = 'awards';

    protected $fillable = [
        'title',
        'location',
        'status',
        'poster_image_url'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'title' => ['required'],
            'location' => ['required'],
            'poster_image_url' => ['required','image', 'mimes:jpeg,png,jpg']
        ];

        $nice_names = [ # Friendly names
            'poster_image_url' => 'poster image',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function sponsors()
    {
        return $this->belongsToMany(Sponsor::class, 'award_sponsors', 'award_id', 'sponsor_id');
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'award_genres', 'award_id', 'genre_id');
    }


}
