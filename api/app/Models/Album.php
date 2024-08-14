<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albums';

    protected $fillable = [
        'album_title',
        'artist_id',
        'release_date',
        'genre_id',
        'album_artwork_url',
        'featured_artists',
        'producer',
        'record_label',
        'awards', //List any awards or nominations the album has won or been nominated for
        'summary',
        'boomplay_music_link',
        'deezer_music_link',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
        'version', //Specify if there are different versions of the album, such as deluxe editions, special editions, or remastered versions.
        'created_by'
    ];

    public function tracks(): HasMany {
        return $this->hasMany(Track::class);
    }



}
