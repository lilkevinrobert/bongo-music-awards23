<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistNomination extends Model
{
    use HasFactory;

    protected $fillable = [
        'artist_id',
        'award_id',
        'genre_id',
        'category_id',
        'category_item_id'
    ];


    public function artist()
    {
        return $this->belongsTo(ArtistProfile::class);
    }

    public function award()
    {
        return $this->belongsTo(Award::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

//    public function categoryItem()
//    {
//        return $this->belongsTo(CategoryItem::class);
//    }
}
