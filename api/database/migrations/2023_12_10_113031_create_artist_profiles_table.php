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
//            $table->unsignedBigInteger('artist_occupation_id'); // The artist’s roles (e.g., singer, songwriter, producer, instrumentalist).
            $table->string('record_label');
            $table->date('debut_year');
            $table->string('stage_name');
//            $table->unsignedBigInteger('album_id')->nullable();
//            $table->unsignedBigInteger('single_id')->nullable();
//            $table->unsignedBigInteger('artist_award_id')->nullable();
            $table->string('bio');
//            $table->unsignedBigInteger('genre_id');
            $table->string('official_website_link');
            $table->string('spotify_music_link')->nullable();
            $table->string('apple_music_link')->nullable();
            $table->string('youtube_music_link')->nullable();
            $table->string('boomplay_music_link')->nullable();
            $table->string('created_by');
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
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
