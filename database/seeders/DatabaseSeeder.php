<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
           'name' => "Prasad Ghosh",
           'email' => "prasadghosh997@gmail.com",
           'password' => bcrypt('Prasad$9078'),
           'email_verified_at' => time()
        ]);

        Project::factory()
            ->count(100)
            ->hasTasks(150)
            ->create();
    }
}
