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

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            'stage_name' => ['required', 'min:2', 'max:50'],
            'bio' => ['required',],
            'phone_number' => ['required'],
            'genre' => ['required'],
            'date_of_birth' => ['required'],
            'place_of_birth' => ['required'],
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
