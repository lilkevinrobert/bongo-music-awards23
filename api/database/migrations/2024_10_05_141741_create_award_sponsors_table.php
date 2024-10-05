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
        Schema::create('award_sponsors', function (Blueprint $table) {
            $table->id();
//            $table->foreignId('award_id')->constrained('awards')->onDelete('cascade');
//            $table->foreignId('sponsor_id')->constrained('sponsors')->onDelete('cascade');
            $table->unsignedBigInteger('award_id');
            $table->unsignedBigInteger('sponsor_id');
            $table->timestamps();
            $table->foreign('award_id')->references('id')->on('awards')->onDelete('cascade');
            $table->foreign('sponsor_id')->references('id')->on('sponsors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('award_sponsors');
    }
};
