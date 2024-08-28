<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

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

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            //check the input if the exists in the regions, distraction, ward, street tables
            'region_id' => ['required'],
            'district_id' => ['required'],
            'ward_shehia_id' => ['required'],
            'street_id' => ['required'],
            'street_road_id' => ['required'],
            'building_house_number' => ['required'],
            'physical_address' => ['required'],
            'postal_address' => ['required'],
            'postal_address_city' => ['required'],
            'address_type' => ['required'], //enum validation
            'residence_type' => ['required'], //enum validation
        ];

        $nice_names = [ # Friendly names
            'region_id' => 'Region',
            'district_id' => 'District',
            'ward_shehia_id' => 'Ward',
            'street_id' => 'Street',
            'street_road_id' => 'Street Road',
            'building_house_number' => 'Building House Number',
            'physical_address' => 'Physical Address',
            'postal_address' => 'Postal Address',
            'postal_address_city' => 'Postal Address City',
            'address_type' => 'Address Type',
            'residence_type' => 'Residence Type',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
