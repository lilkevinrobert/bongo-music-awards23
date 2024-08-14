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

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function categories(){
        return $this->hasMany(Category::class);
    }


}
