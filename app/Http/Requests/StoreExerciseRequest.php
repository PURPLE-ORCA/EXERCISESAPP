<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExerciseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Ensure this returns true to allow the request
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|string|max:255',
            'level' => 'required|in:beginner,Intermediate,Advanced',
            'content' => 'required|string',
            'solution' => 'required|string', // Changed from 'url' to 'string'
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }
}