<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exercises', function (Blueprint $table) {
            $table->id();
            $table->foreignId('topic_id')->constrained('topics')->onDelete('cascade');
            $table->string('title');
            $table->enum('level', ['Beginner', 'Intermediate', 'Advanced']);
            $table->text('content');
            $table->text('solution');
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exercises');
    }
};
