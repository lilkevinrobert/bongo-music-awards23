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
            $table->string('profile_image_url')->nullable();
            $table->string('stage_name');
            $table->string('album_id')->nullable();
            $table->string('single_id')->nullable();
            $table->string('bio');
            $table->string('phone_number')->nullable();
            $table->enum('genre',['Bongo flavor', 'RNB', 'POP']);
            $table->string('spotify_music_link')->nullable();
            $table->string('apple_music_link')->nullable();
            $table->string('youtube_music_link')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('place_of_birth')->nullable();
            $table->string('boomplay_music_link')->nullable();
            $table->string('awards_won')->nullable();
            $table->string('created_by');
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
