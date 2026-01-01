<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         $categoryIds = Category::pluck('id')->all();
        $category_id = $this->faker->randomElement($categoryIds);
        $randomImages = ['/products/one.jpg','/products/two.webp','/products/three.webp','/products/four.webp'];
        $randomImage = $this->faker->randomElement($randomImages);

        return [
            'category_id' => $category_id,
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->paragraphs(3,true),
            'price' => $this->faker->numberBetween(1000000, 20000000),
            'stock' => $this->faker->numberBetween(1, 50),
            'image' => $randomImage,
        ];
    }
}
