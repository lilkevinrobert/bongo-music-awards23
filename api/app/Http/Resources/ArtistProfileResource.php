<?php

namespace App\Http\Resources;

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
//        return parent::toArray($request);

        return [
            'stage_name' => $this->stage_name,
            'fullname' => $this->getFullName($this->user_information_id),
        ];
    }

    private function getFullName($user_information_id)
    {
        $names = UserInformation::where('id', $user_information_id)
            ->select(['first_name', 'middle_name', 'last_name'])
            ->limit(1)
            ->first();
        return $names->full_name;
    }


}
