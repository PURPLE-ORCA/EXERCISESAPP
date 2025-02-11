<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Http\Requests\StoreExerciseRequest;
use App\Http\Requests\UpdateExerciseRequest;
use App\Models\Topic;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    public function index()
    {
        $exercises = Exercise::with('topic')->get();
        return inertia('Admin/Exercises/Index', ['exercises' => $exercises]);
    }

    public function create()
    {
        $topics = Topic::all();
        return inertia('Admin/Exercises/Create', ['topics' => $topics]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|string|max:255',
            'level' => 'required|in:beginner,Intermediate,Advanced',
            'content' => 'required|string',
            'solution' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $exercise = new Exercise();
        $exercise->topic_id = $request->topic_id;
        $exercise->title = $request->title;
        $exercise->level = $request->level;
        $exercise->content = $request->content;
        $exercise->solution = $request->solution;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('img/exercises', 'public');
            $exercise->image = $imagePath;
        }

        $exercise->save();

        return redirect()->route('admin.exercises.index')->with('success', 'Exercise created successfully!');
    }

    public function edit(Exercise $exercise)
    {
        $topics = Topic::all();
        return inertia('Admin/Exercises/Edit', ['exercise' => $exercise, 'topics' => $topics]);
    }

    public function update(Request $request, Exercise $exercise)
    {
        $request->validate([
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|string|max:255',
            'level' => 'required|in:beginner,Intermediate,Advanced',
            'content' => 'required|string',
            'solution' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $exercise->topic_id = $request->topic_id;
        $exercise->title = $request->title;
        $exercise->level = $request->level;
        $exercise->content = $request->content;
        $exercise->solution = $request->solution;

        if ($request->hasFile('image')) {
            if ($exercise->image && Storage::disk('public')->exists($exercise->image)) {
                Storage::disk('public')->delete($exercise->image);
            }
            $imagePath = $request->file('image')->store('img/exercises', 'public');
            $exercise->image = $imagePath;
        }

        $exercise->save();

        return redirect()->route('admin.exercises.index')->with('success', 'Exercise updated successfully!');
    }

    public function destroy(Exercise $exercise)
    {
        if ($exercise->image && Storage::disk('public')->exists($exercise->image)) {
            Storage::disk('public')->delete($exercise->image);
        }

        $exercise->delete();

        return redirect()->route('admin.exercises.index')->with('success', 'Exercise deleted successfully!');
    }
}
