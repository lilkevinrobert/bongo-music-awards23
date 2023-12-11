<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';
    protected $fillable = [
      'name'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function categories(){
        return $this->hasMany(Category::class);
    }
}
