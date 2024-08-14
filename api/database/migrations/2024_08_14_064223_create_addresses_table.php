<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('region_id');
            $table->unsignedBigInteger('district_id');
            $table->unsignedBigInteger('ward_shehia_id');
            $table->unsignedBigInteger('street_id');
            $table->unsignedBigInteger('street_road_id');
            $table->unsignedBigInteger('house_number');
            $table->enum('address_type', ['HOME', 'WORK', 'OTHER']);
            $table->enum('residence_type', ['PERMANENT', 'TEMPORARY']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
