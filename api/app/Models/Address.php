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
        'building_house_number',
        'postal_address',
        'address_type',
        'residence_type'
    ];

    public static function validate($input, $id = null)
    {
        $rules = [ # place-holder for validation rules
            //check the input if the exists in the regions, distraction, ward, street tables
            'region_id' => ['required','exists:regions,id'],
            'district_id' => ['required','exists:districts,id'],
            'ward_shehia_id' => ['required', 'exists:wards,id'],
            'street_id' => ['required', 'exists:streets,id'],
            'building_house_number' => ['required'],
            'postal_address' => ['required'],
            'address_type' => ['required'], //TODO enum validation
            'residence_type' => ['required'], //TODO enum validation
        ];

        $nice_names = [ # Friendly names
            'region_id' => 'Region',
            'district_id' => 'District',
            'ward_shehia_id' => 'Ward or Shehia',
            'street_id' => 'Street',
            'building_house_number' => 'Building House Number',
            'postal_address' => 'Postal Address',
            'address_type' => 'Address Type',
            'residence_type' => 'Residence Type',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }
}
