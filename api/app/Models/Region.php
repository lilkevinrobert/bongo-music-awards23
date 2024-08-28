<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $table = 'regions';
    protected $fillable = [
        'name',
        'napa_region_id',
        'postcode'
    ];

    public function districts(){
        return $this->hasMany(District::class);
    }
}
