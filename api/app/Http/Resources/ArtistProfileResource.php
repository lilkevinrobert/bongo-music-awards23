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
            'stage_name' => $this->stage_name,
            'first_name' => $this->getName($this->user_information_id)['first_name'],
            'middle_name' => $this->getName($this->user_information_id)['middle_name'] ?? '',
            'last_name' => $this->getName($this->user_information_id)['last_name'],
            'phone' => $this->getName($this->user_information_id)['phone'],
            'email' => $this->getEmail($this->user_information_id),
            'genres' => $this->getArtistGenres($this->id),
        ];
    }

    private function getName($user_information_id)
    {
        return UserInformation::where('id', $user_information_id)
            ->select(['first_name', 'middle_name', 'last_name','profile_picture_url', 'phone'])
            ->limit(1)
            ->first();
    }

    private function getEmail($user_information_id)
    {
        $user_id = UserInformation::where('id', $user_information_id)
            ->select(['user_id'])
            ->limit(1)
            ->first()['user_id'];

        return User::where('id', $user_id)
            ->select(['email'])
            ->limit(1)
            ->first()['email'];
    }

    private function getArtistGenres($user_information_id){
        return ArtistGenre::where('artist_id', $user_information_id)
            ->select(['genre_id'])->get();
    }

}
