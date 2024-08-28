<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    protected $table = 'districts';

    protected $fillable = [
        'napa_region_id',
        'region_id',
        'napa_district_id',
        'name',
        'postcode'
    ];


    public function regions()
    {
        return $this->belongsTo(Region::class);
    }

    public function wards(){
        return $this->hasMany(Ward::class);
    }
}
