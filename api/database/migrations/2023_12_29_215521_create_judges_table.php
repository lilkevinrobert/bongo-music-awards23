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
        Schema::create('judges', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_information_id');
            $table->string('organization');
            $table->string('position');
            $table->string('expertise');
            $table->text('bio');
            $table->string('created_by');
            $table->foreign('user_information_id')
                ->references('id')
                ->on('user_informations')
                ->onDelete('cascade');
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
        Schema::dropIfExists('judges');
    }
};
