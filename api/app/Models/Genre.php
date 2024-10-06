<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';
    protected $fillable = [
      'name'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'name' => ['required', 'min:2', 'max:50'],
        ];

        $nice_names = [ # Friendly names
            'name' => 'Genre Name',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function categories(){
        return $this->hasMany(Category::class);
    }
    public function awards()
    {
        return $this->belongsToMany(Award::class, 'award_genres', 'genre_id', 'award_id');
    }


}
