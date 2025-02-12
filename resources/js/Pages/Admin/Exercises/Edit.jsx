import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Edit = ({ exercise, topics }) => {
    const { data, setData, put, processing, errors } = useForm({
        topic_id: exercise.topic_id,
        title: exercise.title,
        level: exercise.level,
        content: exercise.content,
        solution: exercise.solution,
        image: null,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.exercises.update', exercise.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Exercise" />
            <div className="p-8 text-green-400 min-h-screen flex flex-col items-center">
                <div className="max-w-3xl w-full bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-extrabold text-green-300 mb-6 text-center border-b border-green-500 pb-2">
                        Edit Exercise
                    </h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                        <div>
                            <label htmlFor="topic_id" className="block text-sm font-medium mb-1">Topic</label>
                            <select id="topic_id" name="topic_id" value={data.topic_id} onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg">
                                <option value="">Select a topic</option>
                                {topics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                                ))}
                            </select>
                            {errors.topic_id && <div className="text-red-500 mt-1">{errors.topic_id}</div>}
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
                            <input id="title" type="text" name="title" value={data.title} onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg" />
                            {errors.title && <div className="text-red-500 mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium mb-1">Level</label>
                            <select id="level" name="level" value={data.level} onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg">
                                <option value="beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                            {errors.level && <div className="text-red-500 mt-1">{errors.level}</div>}
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
                            <textarea id="content" name="content" value={data.content} onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg" rows="4"></textarea>
                            {errors.content && <div className="text-red-500 mt-1">{errors.content}</div>}
                        </div>
                        <div>
                            <label htmlFor="solution" className="block text-sm font-medium mb-1">Solution</label>
                            <textarea id="solution" name="solution" value={data.solution} onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg" rows="4"></textarea>
                            {errors.solution && <div className="text-red-500 mt-1">{errors.solution}</div>}
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium mb-1">Image</label>
                            <input id="image" type="file" name="image" onChange={handleChange} className="w-full bg-gray-700 text-white border border-green-500 p-3 rounded-lg" />
                            {errors.image && <div className="text-red-500 mt-1">{errors.image}</div>}
                        </div>
                        <div className="flex justify-between mt-6">
                            <button type="submit" disabled={processing} className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300 uppercase tracking-wide">
                                Update Exercise
                            </button>
                            <Link href={route('admin.exercises.index')} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300 uppercase tracking-wide">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
