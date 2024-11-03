<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NominationVote extends Model
{
    use HasFactory;

    protected $fillable = [
//        'award_id',
//        'nomination_id',
//        'genre_id',
//        'category_id',
//        'artist_id', // Msanii anaepigiwa kula
//        'category_item', // kazi inayopigiwa kula
        'artist_nomination_id',
        'judge_id', // Judge aliepiga kula
        'vote'
    ];
}
