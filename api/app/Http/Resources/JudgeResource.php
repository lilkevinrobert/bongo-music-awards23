<?php

namespace App\Http\Resources;

use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Http\Resources\Json\JsonResource;

class JudgeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'organization' => $this->organization,
            'position' => $this->position,
            'expertise' => $this->expertise,
            'biography' => $this->bio,
            'user_information' => new UserInformationResource($this->userInformation),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }




}
