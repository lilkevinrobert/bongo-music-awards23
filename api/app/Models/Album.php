<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Validator;

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
//        'featured_artists',
//        'producer',
//        'record_label',
    //    'awards', //List any awards or nominations the album has won or been nominated for
        'summary',
        'boomplay_music_link',
        'deezer_music_link',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
//        'version', //Specify if there are different versions of the album, such as deluxe editions, special editions, or remastered versions.
        'created_by'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'album_title' => ['required', 'min:2', 'max:100'],
            'artist_id' => ['required','exists:artist_profiles,id'],
            'release_date' => ['required','date'],
            'genre_id' => ['required','exists:genres,id'],
            'album_artwork_url' => ['required','image', 'mimes:jpeg,png,jpg'],
            'summary' => ['required'],
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

    public function tracks(): HasMany {
        return $this->hasMany(Track::class);
    }



}
