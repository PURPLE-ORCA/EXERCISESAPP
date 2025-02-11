<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Topic;
use App\Models\Exercise;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed users
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Seed topics
        $topics = [
            ['name' => 'Python'],
            ['name' => 'JavaScript'],
            ['name' => 'CSS'],
            ['name' => 'Tailwind'],
        ];

        foreach ($topics as $topicData) {
            Topic::create($topicData);
        }

        // Seed exercises
        $exercises = [
            [
                'topic_id' => 1,
                'title' => 'Basic Python Syntax',
                'level' => 'Beginner',
                'content' => 'Write a simple Python program that prints "Hello, World!".',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 1,
                'title' => 'Python Functions',
                'level' => 'Intermediate',
                'content' => 'Create a Python function that takes two numbers and returns their sum.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => null,
            ],
            [
                'topic_id' => 2,
                'title' => 'JavaScript Variables',
                'level' => 'Beginner',
                'content' => 'Declare a variable in JavaScript and assign it the value "Hello, World!".',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 2,
                'title' => 'JavaScript Loops',
                'level' => 'Intermediate',
                'content' => 'Write a JavaScript loop that prints numbers from 1 to 5.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => null,
            ],
            [
                'topic_id' => 3,
                'title' => 'CSS Flexbox',
                'level' => 'Beginner',
                'content' => 'Create a flex container with three items aligned horizontally.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 3,
                'title' => 'CSS Grid',
                'level' => 'Intermediate',
                'content' => 'Create a grid layout with 3 columns and 2 rows.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => null,
            ],
            [
                'topic_id' => 4,
                'title' => 'Tailwind Basics',
                'level' => 'Beginner',
                'content' => 'Create a button with Tailwind classes for padding and background color.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 4,
                'title' => 'Tailwind Responsive Design',
                'level' => 'Intermediate',
                'content' => 'Create a responsive navigation bar using Tailwind.',
                'solution' => 'https://webilymedia.com/trick-show/1',
                'image' => null,
            ],
        ];

        foreach ($exercises as $exerciseData) {
            Exercise::create($exerciseData);
        }
    }
}