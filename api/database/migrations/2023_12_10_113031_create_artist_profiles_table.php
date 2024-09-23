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
        Schema::create('artist_profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_information_id');
            $table->string('record_label');
            $table->integer('debut_year');
            $table->string('stage_name');
            $table->text('bio');
            $table->string('official_website_link')->nullable();
            $table->string('spotify_music_link')->nullable();
            $table->string('apple_music_link')->nullable();
            $table->string('youtube_music_link')->nullable();
            $table->string('boomplay_music_link')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->timestamps();
            $table->foreign('user_information_id')
                ->references('id')
                ->on('user_informations')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artist_profiles');
    }
};
