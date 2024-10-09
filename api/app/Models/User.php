<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'user_role',
        'password',
        'status'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getFullNameAttribute(){return ucfirst($this->first_name) . " " . ucfirst($this->middle_name) . " " . ucfirst($this->last_name);}

    public static function validate($input, $id = null)
    {
        $rules = [
            'username' => ['required', 'min:2', 'max:50'],
            'email' => ['required','email'],
            'password' => ['required'],
        ];

        $nice_names = [
            'username' => 'Username',
            'email' => 'Email',
            'password' => 'Password',
        ];

        # validation code
        $validator = Validator::make($input, $rules);
        $validator->setAttributeNames($nice_names);

        return $validator;
    }

    // Helper methods to check roles
    public function isAdmin()
    {
        return $this->user_role === 'ADMIN';
    }

    public function isArtist()
    {
        return $this->user_role === 'ARTIST';
    }

    public function isJudge()
    {
        return $this->user_role === 'JUDGE';
    }

    public function isVote()
    {
        return $this->user_role === 'VOTER';
    }

}
