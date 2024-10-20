<?php

namespace App\Http\Resources;

use App\Models\ArtistGenre;
use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Http\Resources\Json\JsonResource;

class ArtistProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//        TODO USING LARAVEL RESOURCE RELATIONSHIP BETWEEN ENTITIES TO OPTIMIZE THE DB QUERIES.
//        return parent::toArray($request);

        return [
            'id' => $this->id,
            'stage_name' => $this->stage_name,
            'genres' => $this->getArtistGenres($this->id),
            'user_information' => new UserInformationResource($this->userInformation),
//        'artist_occupation_id',
            'record_label' => $this->record_label,
            'debut_year' => $this->debut_year,
//        'album_id',
//        'single_id',
//        'artist_award_id', // relation one to many
            'bio' => '',
//        'genres', // relation one to many
            'official_website_link' => $this->official_website_link,
            'spotify_music_link' => $this->spotify_music_link,
            'apple_music_link' => $this->apple_music_link,
            'youtube_music_link' => $this->youtube_music_link,
            'boomplay_music_link' => $this->boomplay_music_link,
        ];
    }



    private function getArtistGenres($user_information_id)
    {
        return ArtistGenre::where('artist_id', $user_information_id)
            ->select(['genre_id'])->get();
    }

}
