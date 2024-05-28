<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'email_verified_at',
        'role'
    ];


    // Define the possible role values
    const ROLE_USER = 'user';
    const ROLE_ADMIN = 'admin';

    // Optionally, you can define an array of roles for easy reference
    public static $roles = [
        self::ROLE_USER,
        self::ROLE_ADMIN,
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


      // Accessor for role
    public function getRoleAttribute($value)
    {
        return ucfirst($value);
    }

    // Mutator for role
    public function setRoleAttribute($value)
    {
        $this->attributes['role'] = strtolower($value);
    }


    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
