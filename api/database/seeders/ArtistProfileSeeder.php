<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ArtistProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'marioo',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'marioo@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 762 223 093',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Kibiti',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'alikiba',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'alikiba@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 762 523 393',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Kibiti',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'diamond_platinumz',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'diamond_platnumz@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 762 987 654',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Kibiti',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'rayvanny',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'rayvanny@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 788 456 123',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Mbeya',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'lava lava',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'lava_lava@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 788 456 123',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Dar es salaam',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'Hermonize',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'harmonize@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 788 456 123',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Dar es salaam',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


        \App\Models\ArtistProfile::create([
            'profile_image_url' => 'not available',
            'stage_name' => 'Vanesa Mdee',
            'album_id' => '',
            'single_id' => '',
            'user_id' => User::where('email', 'vanessa_mdee@gmail.com')->select('id')->first()['id'],
            'bio' => 'Omary Ally Mwanga, known professionally as Marioo, is a Tanzanian singer, songwriter, poet, and music producer. He was born in Temeke, Dar es Salaam and later on he was moved to Kibiti District to live with his grandmother.',
            'phone_number' => '+255 788 456 123',
            'genre' => 'Bongo Flavor',
            'spotify_music_link' => 'https://open.spotify.com/artist/4ZTqTkO2kj1doQrbqQ5KEe?autoplay=true',
            'apple_music_link' => 'https://music.apple.com/tz/artist/marioo/1469946990',
            'youtube_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'date_of_birth' => '2023-12-17',
            'place_of_birth' => 'Dar es salaam',
            'boomplay_music_link' => 'https://www.youtube.com/channel/UCgZGpR80Z-x5fnUsKuKM2kg?feature=gws_kp_artist&feature=gws_kp_artist',
            'awards_won' => 'Upcoming artist',
            'created_by' => 1
        ]);


    }
}
