<?php

namespace Database\Seeders;

use App\Models\Album;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Album::create([
            'album_title' => 'Visit Bongo',
            'release_date' => 'November 24, 2023',
            'genre' => 'POP',
            'album_artwork_url' => 'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'featured_artists' => json_encode(['Nkosazana Daughter','Bruce Melodie']),
            'producer' => 'B BOY BEATS',
            'record_label' => 'KONDE MUSIC WORLD WIDE',
            'awards' => 'Bongo Music Awards 2023', //List any awards or nominations the album has won or been nominated for
            'summary' => 'Visit Bongo is a remarkable and well-created body of work that accommodates a number of fourteen beautiful tracks and features guest appearances from Bruce Melodie and Nkosazana Daughter, whose individual services are well-acknowledged. It is a special offering in which Harmonize still showcases his unlimited capabilities and puts some hard work into reaching his fans, satisfaction and expectations.',
            'boomplay_music_link'=>'https://www.boomplay.com/albums/80332287',
            'deezer_music_link'=>'https://www.deezer.com/album/517695862',
            'spotify_music_link'=>'https://open.spotify.com/album/0ZY5xnqRphPOYRkrHF0LiW?autoplay=true',
            'apple_music_link'=>'https://music.apple.com/tz/album/visit-bongo/1716918682',
            'youtube_music_link'=>'https://www.youtube.com/playlist?list=PLfYxLCw92176xwSkwtEsjrn1F1eGgxds1',
            'version' => 'special editions', //Specify if there are different versions of the album, such as deluxe editions, special editions, or remastered versions.
            'created_by'=>1
        ]);
    }
}
