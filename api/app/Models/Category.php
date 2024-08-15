<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = [
        'name',
        'genre_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'categories' => 'required|array',
            'genre_id' => 'required|exists:genres,id',
        ];

        $nice_names = [ # Friendly names
            'categories' => 'Category Name',
            'genre_id' => 'Genre',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function genres()
    {
        return $this->belongsTo(Genre::class);
    }

    public $timestamps = true;
}
