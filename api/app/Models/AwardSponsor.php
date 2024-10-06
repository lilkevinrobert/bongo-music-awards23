<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class AwardSponsor extends Model
{
    use HasFactory;

    protected $table = 'award_sponsors';

    protected $fillable = [
        'award_id',
        'sponsor_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'award_id' => 'required|exists:awards,id',
            'sponsor_id' => 'required|exists:sponsors,id|array',
            'sponsor_id.*' => 'distinct|integer|exists:sponsors,id'
        ];

        $nice_names = [ # Friendly names
            'award_id' => 'Award',
            'sponsor_id' => 'Sponsor',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
