<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nominator extends Model
{
    use HasFactory;

    protected $table = 'nominators';

    protected $fillable = [
        'user_id',
        'event_id',
        'phone_number',
    ];

    public $timestamps = true;
}
