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
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('album_title');
            $table->date('release_date');
            $table->unsignedBigInteger('genre_id');
            $table->unsignedBigInteger('artist_id');
            $table->string('album_artwork_url');
//            $table->json('featured_artists');
//            $table->string('producer');
//            $table->string('record_label');
//            $table->string('awards')->nullable();
            $table->text('summary')->nullable();
            $table->string('boomplay_music_link')->nullable();
            $table->string('deezer_music_link')->nullable();
            $table->string('spotify_music_link')->nullable();
            $table->string('apple_music_link')->nullable();
            $table->string('youtube_music_link')->nullable();
//            $table->enum('version',['DELUXE_EDITIONS', 'SPECIAL_EDITIONS', 'REMASTERED_VERSION']); //Specify if there are different versions of the album, such as deluxe editions, special editions, or remastered versions.
            $table->string('created_by');
            $table->timestamps();
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            $table->foreign('artist_id')->references('id')->on('artist_profiles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
};
