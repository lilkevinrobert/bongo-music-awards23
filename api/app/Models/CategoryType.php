<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryType extends Model
{
    use HasFactory;

    protected $fillable = [
        'type'
    ];
    /**
     * Get the category associated with the category type.
     */
    public function category()
    {
        return $this->hasOne(Category::class);
    }
}
