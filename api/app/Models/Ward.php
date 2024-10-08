<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;

    protected $table = 'wards';

    protected $fillable = [
        'name',
        'postcode',
        'napa_ward_id',
        'region_id',
        'district_id'
    ];

    public function districts()
    {
        return $this->belongsTo(District::class);
    }

    public function streets(){
        return $this->hasMany(Street::class);
    }
}
