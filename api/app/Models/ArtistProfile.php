<?php

namespace App\Models;

use App\Http\Resources\ArtistProfileResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistProfile extends Model
{
    use HasFactory;

    protected $table = 'artist_profiles';

    protected $fillable = [
        'profile_image_url',
        'stage_name',
        'album_id',
        'single_id',
        'user_id',
        'bio',
        'phone_number',
        'genre',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
        'date_of_birth',
        'place_of_birth',
        'boomplay_music_link',
        'awards_won',
        'created_by'
    ];

    public $timestamps = true;


    public function getArtistProfiles(array $artistProfiles = [])
    {
        return new ArtistProfileResource($artistProfiles);

    }


}
