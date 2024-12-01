<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Track extends Model
{
    protected $fillable = [
        'title',
        'track_number',
        'duration',
        'genre_id',
        'featured_artists',
        'composer',
        'producer',
        'release_date',
        'album_id',
        'artist_id',
        'track_artwork_url',
        'boomplay_music_link',
        'deezer_music_link',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
        'created_by'
    ];

    use HasFactory;

    protected $table = 'tracks';

    public $timestamps = true;

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'title' => ['required', 'min:2', 'max:100'],
            'track_number' => ['required', 'numeric', 'max:100'],
            'duration' => ['required', 'regex:/^\d{2}:\d{2}$/'],
//            'duration' => ['required', 'max:5'],
            'genre_id' => ['required','exists:genres,id'],
            'featured_artists' => ['nullable', 'array','min:1'], //TODO json
            'composer' => ['required', 'min:2', 'max:100'],
            'producer' => ['required', 'min:2', 'max:100'],
            'release_date' => ['required','date'],
            'album_id' => ['required','exists:albums,id'],
            'artist_id' => ['required','exists:artist_profiles,id'],
            'track_artwork_url' => ['required','image', 'mimes:jpeg,png,jpg'],
            'boomplay_music_link' => ['nullable'],
            'deezer_music_link' => ['nullable'],
            'spotify_music_link' => ['nullable'],
            'apple_music_link' => ['nullable'],
            'youtube_music_link' => ['nullable']
        ];

        $nice_names = [ # Friendly names
            'artist_id' => 'Artist Id',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
