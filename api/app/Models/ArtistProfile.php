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
            'user_information_id' => ['required', 'exists:user_informations,id'],
            'artist_occupations' => ['required',], // TODO to be of type array
            'genres' => ['required',], // TODO to be of type array
            'record_label' => ['required'],
            'debut_year' => ['required','integer'], //TODO year only not date
            'stage_name' => ['required'],
            'bio' => ['required'],
        ];

        $nice_names = [ # Friendly names
            'user_information_id' => 'User Information',
            'artist_occupations' => 'Artist Occupations',
            'record_label' => 'Artist biography',
            'debut_year' => 'Debut Year',
            'stage_name' => 'Stage Name',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    public function userInformation()
    {
        return $this->belongsTo(UserInformation::class);
    }


}
