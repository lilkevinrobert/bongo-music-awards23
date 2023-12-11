<?php

namespace Database\Seeders;

use App\Models\Track;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Track::create([
            'title'=>' Personal Trainer',
            'track_number'=>1,
            'duration'=>'1:49',
            'genre'=>'POP',
            'featured_artists'=>'',
            'composer'=>'Harmonize',
            'producer'=>'B BOY BEATS',
            'release_date'=>'November 24, 2023',
            'album_id' => 1,
            'boomplay_music_link'=>'https://www.boomplay.com/albums/80332287',
            'deezer_music_link'=>'https://www.deezer.com/album/517695862',
            'spotify_music_link'=>'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'apple_music_link'=>'https://music.apple.com/tz/album/visit-bongo/1716918682',
            'youtube_music_link'=>'https://youtu.be/TIY0OLyZfvQ?si=ALWP5V8pB6gzrKPm',
            'created_by'=>1
        ]);


        Track::create([
            'title'=>'Hallelujah',
            'track_number'=>2,
            'duration'=>'3:07',
            'genre'=>'POP',
            'featured_artists'=>'',
            'composer'=>'Harmonize',
            'producer'=>'B BOY BEATS',
            'release_date'=>'November 24, 2023',
            'album_id' => 1,
            'boomplay_music_link'=>'https://www.boomplay.com/albums/80332287',
            'deezer_music_link'=>'https://www.deezer.com/album/517695862',
            'spotify_music_link'=>'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'apple_music_link'=>'https://music.apple.com/tz/album/visit-bongo/1716918682',
            'youtube_music_link'=>'https://youtu.be/TIY0OLyZfvQ?si=ALWP5V8pB6gzrKPm',
            'created_by'=>1
        ]);

        Track::create([
            'title'=>'Best Woman (Mama Song)',
            'track_number'=>3,
            'duration'=>'4:18',
            'genre'=>'POP',
            'featured_artists'=>'',
            'composer'=>'Harmonize',
            'producer'=>'B BOY BEATS',
            'release_date'=>'November 24, 2023',
            'album_id' => 1,
            'boomplay_music_link'=>'https://www.boomplay.com/albums/80332287',
            'deezer_music_link'=>'https://www.deezer.com/album/517695862',
            'spotify_music_link'=>'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'apple_music_link'=>'https://music.apple.com/tz/album/visit-bongo/1716918682',
            'youtube_music_link'=>'https://youtu.be/gcGyBwBIMJ4?si=hvO1kHBpNSY_D6rl',
            'created_by'=>1
        ]);


        Track::create([
            'title'=>'Side Nigga',
            'track_number'=>4,
            'duration'=>'2:47',
            'genre'=>'POP',
            'featured_artists'=>'',
            'composer'=>'Harmonize',
            'producer'=>'B BOY BEATS',
            'release_date'=>'November 24, 2023',
            'album_id' => 1,
            'boomplay_music_link'=>'https://www.boomplay.com/albums/80332287',
            'deezer_music_link'=>'https://www.deezer.com/album/517695862',
            'spotify_music_link'=>'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'apple_music_link'=>'https://music.apple.com/tz/album/visit-bongo/1716918682',
            'youtube_music_link'=>'https://youtu.be/gcGyBwBIMJ4?si=hvO1kHBpNSY_D6rl',
            'created_by'=>1
        ]);
    }
}
