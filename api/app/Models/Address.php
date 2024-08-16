<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $table = 'addresses';

    protected $fillable = [
        'region_id',
        'district_id',
        'ward_shehia_id',
        'street_id',
        'street_road_id',
        'building_house_number',
        'physical_address',
        'postal_address',
        'postal_address_city',
        'address_type',
        'residence_type'
    ];
}
