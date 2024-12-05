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
            $table->integer('track_number');
            $table->string('duration');
            $table->unsignedBigInteger('genre_id');
            $table->json('featured_artists')->nullable();
            $table->string('composer')->nullable();
            $table->string('producer');
            $table->date('release_date');
            $table->unsignedBigInteger('album_id');
            $table->unsignedBigInteger('artist_id');
            $table->string('track_artwork_url');
            $table->string('boomplay_music_link')->nullable();
            $table->string('deezer_music_link')->nullable();
            $table->string('spotify_music_link')->nullable();
            $table->string('apple_music_link')->nullable();
            $table->string('youtube_music_link')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->timestamps();
            $table->foreign('artist_id')->references('id')->on('artist_profiles')->onDelete('cascade');
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            $table->foreign('album_id')->references('id')->on('albums')->onDelete('cascade');
//            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
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
