<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserInformationResource extends JsonResource
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
            'first_name' => $this->first_name,
            'middle_name' => $this->middle_name,
            'last_name' => $this->last_name,
            'gender' => $this->gender,
            'date_of_birth' => $this->date_of_birth,
            'phone' => $this->phone,
            'profile_picture_url' => $this->profile_picture_url,
            'address_id' => $this->address_id,
            'username' => $this->user->username,
            'email' => $this->user->email,
            'status' => $this->user->status,
            'role' => $this->user->user_role,
            'user_id' => $this->user_id,
        ];
    }
}
