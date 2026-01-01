<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(1)->create();
         $categories = [
            'DSLR',
            'Mirrorless',
            'ActionCam',
            'Lens',
        ];
          foreach ($categories as $name) {
            Category::create(['name' => $name]);
        }
         Product::factory(20)->create();
        User::factory()->isAdmin()->create([
            'full_name' => '123',
            'username' => '123',
            'email' => 'fengli@gmail.com',
            'password' => Hash::make('123'),
        ]);
    }
}
