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
        Schema::create('award_nominations', function (Blueprint $table) {
            $table->id();
            $table->string('award_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['ACTIVE', 'CLOSED'])->default('CLOSED');
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
        Schema::dropIfExists('award_nominations');
    }
};
