<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'text' => $this->faker->text(),
            'status' => $this->faker->numberBetween(0, 3),
            'youtube_url' => $this->faker->url(),
            'user_id' => 1, // 実際のIDを指定する
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
