<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nominator extends Model
{
    use HasFactory;

    protected $table = 'nominators';

    protected $fillable = [
        'profile_image_url',
        'user_id',
        'event_id',
        'organization',
        'position',
        'expertise',
        'phone_number',
        'role',
        'bio',
        'created_by'
    ];

    public $timestamps = true;
}
