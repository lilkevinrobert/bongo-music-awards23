<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';
    protected $fillable = [
        'code',
        'name'
    ];

    public function genres(){
        return $this->hasMany(Genre::class);
    }

    public function categories(){
        return $this->hasManyThrough(Category::class, Genre::class);
    }

    public $timestamps = true;
}
