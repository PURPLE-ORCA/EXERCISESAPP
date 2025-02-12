import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Create = ({ topics }) => {
    const { data, setData, post, processing, errors } = useForm({
        topic_id: '',
        title: '',
        level: 'beginner',
        content: '',
        solution: '',
        image: null,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.exercises.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Exercise" />
            <div className="p-8 bg-black text-green-400 min-h-screen flex flex-col items-center">
                <div className="max-w-3xl w-full bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-extrabold text-green-300 mb-6 text-center border-b border-green-500 pb-2">
                        Create New Exercise
                    </h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                        <div>
                            <label htmlFor="topic_id" className="block text-sm font-medium">Topic</label>
                            <select id="topic_id" name="topic_id" value={data.topic_id} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300">
                                <option value="">Select a topic</option>
                                {topics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                                ))}
                            </select>
                            {errors.topic_id && <div className="text-red-500 mt-1">{errors.topic_id}</div>}
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium">Title</label>
                            <input id="title" type="text" name="title" value={data.title} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300" />
                            {errors.title && <div className="text-red-500 mt-1">{errors.title}</div>}
                        </div>
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium">Level</label>
                            <select id="level" name="level" value={data.level} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300">
                                <option value="beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                            {errors.level && <div className="text-red-500 mt-1">{errors.level}</div>}
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium">Content</label>
                            <textarea id="content" name="content" value={data.content} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300" rows="4"></textarea>
                            {errors.content && <div className="text-red-500 mt-1">{errors.content}</div>}
                        </div>
                        <div>
                            <label htmlFor="solution" className="block text-sm font-medium">Solution</label>
                            <textarea id="solution" name="solution" value={data.solution} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300" rows="4"></textarea>
                            {errors.solution && <div className="text-red-500 mt-1">{errors.solution}</div>}
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium">Image</label>
                            <input id="image" type="file" name="image" onChange={handleChange} className="mt-1 block w-full border border-green-500 p-3 rounded bg-gray-800 text-gray-300" />
                            {errors.image && <div className="text-red-500 mt-1">{errors.image}</div>}
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button type="submit" disabled={processing} className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300">
                                Create Exercise
                            </button>
                            <Link href={route('admin.exercises.index')} className="bg-gray-500 hover:bg-gray-600 text-black px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;