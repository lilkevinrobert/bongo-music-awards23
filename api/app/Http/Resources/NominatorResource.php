<?php

namespace App\Http\Resources;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class NominatorResource extends JsonResource
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
            'fullname' => $this->getFullName($this->user_id),
            'event' => $this->getEvent($this->event_id)['name'],
            'role' => $this->getNominatorInformation($this->user_id)->role,
            'phone' => $this->phone_number,
            'email' => $this->getNominatorInformation($this->user_id)->email,
            'user_id' => $this->user_id,
        ];
    }

    private function getFullName($user_id)
    {
        $names = User::where('id', $user_id)
            ->select(['first_name', 'middle_name', 'last_name'])
            ->limit(1)
            ->first();
        return $names->full_name;
    }

    private function getEvent($event_id){
        $event = Event::where('id', $event_id)
            ->select('name')
            ->limit(1)
            ->first();
        return $event;
    }

    private function getNominatorInformation($user_id){
        $userInfo = User::where('id',$user_id)
            ->select(['role','email'])
            ->limit(1)
            ->first();
        return $userInfo;
    }
}
