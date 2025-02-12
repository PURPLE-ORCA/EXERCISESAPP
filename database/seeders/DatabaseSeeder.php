<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Topic;
use App\Models\Exercise;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed users with different roles
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
        ]);
        User::factory()->count(5)->create(); // Create 5 random students

        // Seed topics
        $topics = [
            ['name' => 'Laravel'],
            ['name' => 'Vue.js'],
            ['name' => 'React'],
            ['name' => 'Docker'],
            ['name' => 'Python'], // New Topic
            ['name' => 'JavaScript (Node.js)'], // New Topic
            ['name' => 'Git'], // New Topic
            ['name' => 'SQL'], // New Topic
            ['name' => 'AWS'], // New Topic
        ];
        foreach ($topics as $topicData) {
            Topic::create($topicData);
        }

        // Seed exercises with detailed real-world scenarios
        $exercises = [
            // Laravel Exercises
            [
                'topic_id' => 1, // Laravel
                'title' => 'Basic Routing in Laravel',
                'level' => 'Beginner',
                'content' => 'Create a basic route that returns "Hello, Laravel!". Use the `Route::get()` method.',
                'solution' => 'https://example.com/laravel-routing',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 1,
                'title' => 'Eloquent Relationships',
                'level' => 'Intermediate',
                'content' => 'Define a one-to-many relationship between Users and Posts. Ensure you use Eloquent models and migrations to create the necessary tables.',
                'solution' => 'https://example.com/eloquent-relationships',
                'image' => null,
            ],
            [
                'topic_id' => 1,
                'title' => 'Middleware Implementation',
                'level' => 'Advanced',
                'content' => 'Create a custom middleware in Laravel that checks if the user is authenticated before accessing a specific route.',
                'solution' => 'https://example.com/laravel-middleware',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 1,
                'title' => 'API Resource Response',
                'level' => 'Intermediate',
                'content' => 'Build an API endpoint that returns a paginated list of users using Laravel resources.',
                'solution' => 'https://example.com/laravel-api-resource',
                'image' => 'img/template.jpg',
            ],

            // Vue.js Exercises
            [
                'topic_id' => 2, // Vue.js
                'title' => 'Vue.js Data Binding',
                'level' => 'Beginner',
                'content' => 'Create a Vue component that binds user input to a text field and displays it dynamically.',
                'solution' => 'https://example.com/vue-data-binding',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 2,
                'title' => 'Conditional Rendering',
                'level' => 'Beginner',
                'content' => 'Use `v-if` and `v-else` directives to conditionally render elements based on user input.',
                'solution' => 'https://example.com/vue-conditional-rendering',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 2,
                'title' => 'Component Communication',
                'level' => 'Intermediate',
                'content' => 'Pass data from a parent component to a child component using props and emit events from the child back to the parent.',
                'solution' => 'https://example.com/vue-component-communication',
                'image' => null,
            ],
            [
                'topic_id' => 2,
                'title' => 'Vuex State Management',
                'level' => 'Advanced',
                'content' => 'Implement Vuex to manage global state in a Vue.js application. Create actions, mutations, and getters.',
                'solution' => 'https://example.com/vue-vuex',
                'image' => 'img/template.jpg',
            ],

            // React Exercises
            [
                'topic_id' => 3, // React
                'title' => 'React State Management',
                'level' => 'Intermediate',
                'content' => 'Create a simple counter app using React `useState` hook.',
                'solution' => 'https://example.com/react-state-management',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 3,
                'title' => 'React Props',
                'level' => 'Beginner',
                'content' => 'Build a reusable button component that accepts props for text and color.',
                'solution' => 'https://example.com/react-props',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 3,
                'title' => 'React Router Basics',
                'level' => 'Intermediate',
                'content' => 'Set up routing in a React application using `react-router-dom`. Create multiple pages and navigate between them.',
                'solution' => 'https://example.com/react-router',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 3,
                'title' => 'Redux State Management',
                'level' => 'Advanced',
                'content' => 'Integrate Redux into a React application to manage global state. Dispatch actions and update the store.',
                'solution' => 'https://example.com/react-redux',
                'image' => 'img/template.jpg',
            ],

            // Docker Exercises
            [
                'topic_id' => 4, // Docker
                'title' => 'Docker Compose Basics',
                'level' => 'Intermediate',
                'content' => 'Set up a Docker Compose file to run a PHP and MySQL environment. Define services, volumes, and networks.',
                'solution' => 'https://example.com/docker-compose',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 4,
                'title' => 'Multi-Container Application',
                'level' => 'Advanced',
                'content' => 'Deploy a multi-container application using Docker Compose. Include a frontend (React or Vue.js), backend (Laravel), and database (MySQL).',
                'solution' => 'https://example.com/docker-multi-container',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 4,
                'title' => 'Docker Networking',
                'level' => 'Intermediate',
                'content' => 'Configure Docker networking to allow communication between containers. Test the setup by making HTTP requests between services.',
                'solution' => 'https://example.com/docker-networking',
                'image' => null,
            ],
            [
                'topic_id' => 4,
                'title' => 'Docker Volume Management',
                'level' => 'Intermediate',
                'content' => 'Set up persistent storage using Docker volumes. Mount a volume to store database files and ensure data persistence.',
                'solution' => 'https://example.com/docker-volumes',
                'image' => 'img/template.jpg',
            ],

            // Python Exercises
            [
                'topic_id' => 5, // Python
                'title' => 'Basic Functions in Python',
                'level' => 'Beginner',
                'content' => 'Write a Python function that takes two numbers as input and returns their sum.',
                'solution' => 'https://example.com/python-functions',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 5,
                'title' => 'File Handling in Python',
                'level' => 'Intermediate',
                'content' => 'Create a Python script that reads a text file, processes its content, and writes the result to another file.',
                'solution' => 'https://example.com/python-file-handling',
                'image' => null,
            ],
            [
                'topic_id' => 5,
                'title' => 'Web Scraping with BeautifulSoup',
                'level' => 'Advanced',
                'content' => 'Scrape data from a website using Python\'s BeautifulSoup library and store it in a JSON file.',
                'solution' => 'https://example.com/python-web-scraping',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 5,
                'title' => 'Flask Web Application',
                'level' => 'Intermediate',
                'content' => 'Build a simple REST API using Flask that allows users to perform CRUD operations on a SQLite database.',
                'solution' => 'https://example.com/python-flask',
                'image' => 'img/template.jpg',
            ],

            // JavaScript (Node.js) Exercises
            [
                'topic_id' => 6, // JavaScript (Node.js)
                'title' => 'Node.js File System',
                'level' => 'Beginner',
                'content' => 'Write a Node.js script that reads a file asynchronously and logs its contents.',
                'solution' => 'https://example.com/nodejs-file-system',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 6,
                'title' => 'Express.js Routing',
                'level' => 'Intermediate',
                'content' => 'Create an Express.js server with multiple routes and middleware functions.',
                'solution' => 'https://example.com/nodejs-express',
                'image' => null,
            ],
            [
                'topic_id' => 6,
                'title' => 'Mongoose Schema Design',
                'level' => 'Intermediate',
                'content' => 'Design a Mongoose schema for a blog application with posts and comments.',
                'solution' => 'https://example.com/nodejs-mongoose',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 6,
                'title' => 'Authentication with JWT',
                'level' => 'Advanced',
                'content' => 'Implement token-based authentication in a Node.js application using JSON Web Tokens (JWT).',
                'solution' => 'https://example.com/nodejs-jwt',
                'image' => 'img/template.jpg',
            ],

            // Git Exercises
            [
                'topic_id' => 7, // Git
                'title' => 'Basic Git Commands',
                'level' => 'Beginner',
                'content' => 'Learn and practice basic Git commands like `git init`, `git add`, `git commit`, and `git push`.',
                'solution' => 'https://example.com/git-basics',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 7,
                'title' => 'Branching and Merging',
                'level' => 'Intermediate',
                'content' => 'Create a new branch, make changes, and merge it back into the main branch.',
                'solution' => 'https://example.com/git-branching',
                'image' => null,
            ],
            [
                'topic_id' => 7,
                'title' => 'Resolving Merge Conflicts',
                'level' => 'Intermediate',
                'content' => 'Simulate a merge conflict and resolve it manually.',
                'solution' => 'https://example.com/git-conflicts',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 7,
                'title' => 'Git Rebase',
                'level' => 'Advanced',
                'content' => 'Use `git rebase` to integrate changes from one branch into another while maintaining a clean history.',
                'solution' => 'https://example.com/git-rebase',
                'image' => 'img/template.jpg',
            ],

            // SQL Exercises
            [
                'topic_id' => 8, // SQL
                'title' => 'Basic SELECT Queries',
                'level' => 'Beginner',
                'content' => 'Write SQL queries to retrieve data from a single table using conditions and sorting.',
                'solution' => 'https://example.com/sql-select',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 8,
                'title' => 'Joins in SQL',
                'level' => 'Intermediate',
                'content' => 'Perform inner, left, and right joins on multiple tables to retrieve related data.',
                'solution' => 'https://example.com/sql-joins',
                'image' => null,
            ],
            [
                'topic_id' => 8,
                'title' => 'Subqueries and CTEs',
                'level' => 'Intermediate',
                'content' => 'Use subqueries and Common Table Expressions (CTEs) to simplify complex queries.',
                'solution' => 'https://example.com/sql-subqueries',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 8,
                'title' => 'Indexes and Performance Optimization',
                'level' => 'Advanced',
                'content' => 'Analyze query performance and create indexes to optimize database queries.',
                'solution' => 'https://example.com/sql-indexes',
                'image' => 'img/template.jpg',
            ],

            // AWS Exercises
            [
                'topic_id' => 9, // AWS
                'title' => 'S3 Bucket Creation',
                'level' => 'Beginner',
                'content' => 'Create an S3 bucket and upload a file to it using the AWS Management Console.',
                'solution' => 'https://example.com/aws-s3',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 9,
                'title' => 'EC2 Instance Setup',
                'level' => 'Intermediate',
                'content' => 'Launch an EC2 instance, connect to it via SSH, and deploy a simple web application.',
                'solution' => 'https://example.com/aws-ec2',
                'image' => null,
            ],
            [
                'topic_id' => 9,
                'title' => 'RDS Database Configuration',
                'level' => 'Intermediate',
                'content' => 'Set up an RDS instance for MySQL and connect to it from an EC2 instance.',
                'solution' => 'https://example.com/aws-rds',
                'image' => 'img/template.jpg',
            ],
            [
                'topic_id' => 9,
                'title' => 'CloudFormation Templates',
                'level' => 'Advanced',
                'content' => 'Create a CloudFormation template to automate the deployment of an EC2 instance and an S3 bucket.',
                'solution' => 'https://example.com/aws-cloudformation',
                'image' => 'img/template.jpg',
            ],
        ];

        // Insert exercises into the database
        foreach ($exercises as $exerciseData) {
            Exercise::create($exerciseData);
        }
    }
}