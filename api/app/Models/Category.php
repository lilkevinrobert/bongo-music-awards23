<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = [
      'name'
    ];

    public function genres()
    {
        return $this->belongsTo(Genre::class);
    }

    public $timestamps = true;
}
