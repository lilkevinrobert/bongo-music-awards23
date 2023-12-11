<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    use HasFactory;

    protected $table = 'tracks';

    protected $fillable = [
        'title',
        'track_number',
        'duration',
        'genre',
        'featured_artists',
        'composer',
        'producer',
        'release_date',
        'album_id',
        'boomplay_music_link',
        'deezer_music_link',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
        'created_by'
    ];

    public $timestamps = true;

    public function album()
    {
        return $this->belongsTo(Album::class);
    }
}
