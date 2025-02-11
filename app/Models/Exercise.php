<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    /** @use HasFactory<\Database\Factories\ExerciseFactory> */
    use HasFactory;

    protected $fillable = [
        'topic_id',
        'title',
        'level',
        'content',
        'solution',
        'image',
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
