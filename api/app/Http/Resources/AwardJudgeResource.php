<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AwardJudgeResource extends JsonResource
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
            'judge' => new JudgeResource($this->whenLoaded('judge')),
            'title' => $this->title,
            'location' => $this->location,
            'status' => $this->status,
            'poster_image_url' => $this->poster_image_url,
            'judges' => $this->judges,
        ];
    }
}
