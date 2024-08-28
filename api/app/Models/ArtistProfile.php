<?php

namespace App\Models;

use App\Http\Resources\ArtistProfileResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class ArtistProfile extends Model
{
    use HasFactory;

    protected $table = 'artist_profiles';

    protected $fillable = [
        'user_information_id',
//        'artist_occupation_id',
        'record_label',
        'debut_year',
        'stage_name',
//        'album_id',
//        'single_id',
//        'artist_award_id', // relation one to many
        'bio',
//        'genre_id', // relation one to many
        'official_website_link',
        'spotify_music_link',
        'apple_music_link',
        'youtube_music_link',
        'boomplay_music_link',
        'created_by'
    ];

    public $timestamps = true;

    public function getArtistProfiles(array $artistProfiles = [])
    {
        return new ArtistProfileResource($artistProfiles);
    }

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'stage_name' => ['required', 'min:2', 'max:50'],
            'bio' => ['required',],
            'phone_number' => ['required'],
            'genre' => ['nullable'],
            'date_of_birth' => ['nullable'],
            'place_of_birth' => ['nullable'],
        ];

        $nice_names = [ # Friendly names
            'stage_name' => 'Artist stage name',
            'bio' => 'Artist biography',
            'phone_number' => 'Phone number',
            'date_of_birth' => 'Date of birth',
            'place_of_birth' => 'Place of birth'
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }


}
