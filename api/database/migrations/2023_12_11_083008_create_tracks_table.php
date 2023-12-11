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
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('track_number');
            $table->string('duration');
            $table->string('genre');
            $table->string('featured_artists');
            $table->string('composer');
            $table->string('producer');
            $table->string('release_date');
            $table->string('album_id');
            $table->string('boomplay_music_link');
            $table->string('deezer_music_link');
            $table->string('spotify_music_link');
            $table->string('apple_music_link');
            $table->string('youtube_music_link');
            $table->string('created_by');
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
        Schema::dropIfExists('tracks');
    }
};
