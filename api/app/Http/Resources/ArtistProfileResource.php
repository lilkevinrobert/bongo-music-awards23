<?php

namespace App\Http\Resources;

use App\Models\User;
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

        $full_name = $this->getFullName($this->user_id);

        return [
            'id' => $this->id,
            'stage_name' => $this->stage_name,
//            'fullname' => $this->getFullName($this->user_id),
            'first_name' =>  $full_name['first_name'],
            'middle_name' =>  $full_name['middle_name'],
            'last_name' =>  $full_name['last_name'],
            'genre' => $this->genre,
            'phone' => $this->phone_number,
            'gender' =>  User::where('id', $this->user_id)->select('gender')->first()['gender'],
            'email' => User::where('id', $this->user_id)->select('email')->first()['email'],
            'user_id' => (int) $this->user_id,
        ];
    }

    private function getFullName($user_id)
    {
        $names = User::where('id', $user_id)
            ->select(['first_name', 'middle_name', 'last_name'])
            ->limit(1)
            ->first();
        //return $names->full_name;
        return $names;
    }
}
