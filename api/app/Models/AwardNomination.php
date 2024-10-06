<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class AwardNomination extends Model
{
    use HasFactory;

    protected $table = 'award_nominations';

    protected $fillable = [
        'award_id',
        'start_date',
        'end_date',
        'status'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'award_id' => ['required', 'exists:awards,id'],
            'start_date' => ['required', 'date', 'after:today'],
            'end_date' => ['required', 'after:start_date', 'date'],
            'status' => ['required', 'in:ACTIVE,CLOSED']
        ];

        $nice_names = [ # Friendly names
            'award_id' => 'Award id',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }


}
