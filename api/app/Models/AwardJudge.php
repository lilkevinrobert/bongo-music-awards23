<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class AwardJudge extends Model
{
    use HasFactory;
    protected $table = 'award_judges';

    protected $fillable = [
        'award_id',
        'judge_id'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'award_id' => 'required|exists:awards,id',
            'judge_id' => 'required|exists:judges,id|array',
            'judge_id.*' => 'distinct|integer|exists:judges,id'
        ];

        $nice_names = [ # Friendly names
            'award_id' => 'Award',
            'judge_id' => 'Judge',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function awards()
    {
        return $this->belongsToMany(Award::class, 'award_judges', 'judge_id', 'award_id');
    }

}
