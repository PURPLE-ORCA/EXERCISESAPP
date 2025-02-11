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
            <div className="p-6 bg-black text-green-500">
                <h1 className="text-2xl font-bold mb-4">Edit Exercise</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="topic_id" className="block text-sm font-medium">Topic</label>
                        <select id="topic_id" name="topic_id" value={data.topic_id} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded">
                            <option value="">Select a topic</option>
                            {topics.map((topic) => (
                                <option key={topic.id} value={topic.id}>{topic.name}</option>
                            ))}
                        </select>
                        {errors.topic_id && <div className="text-red-500 mt-1">{errors.topic_id}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium">Title</label>
                        <input id="title" type="text" name="title" value={data.title} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded" />
                        {errors.title && <div className="text-red-500 mt-1">{errors.title}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="level" className="block text-sm font-medium">Level</label>
                        <select id="level" name="level" value={data.level} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded">
                            <option value="beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        {errors.level && <div className="text-red-500 mt-1">{errors.level}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium">Content</label>
                        <textarea id="content" name="content" value={data.content} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded" rows="4"></textarea>
                        {errors.content && <div className="text-red-500 mt-1">{errors.content}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="solution" className="block text-sm font-medium">Solution</label>
                        <textarea id="solution" name="solution" value={data.solution} onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded" rows="4"></textarea>
                        {errors.solution && <div className="text-red-500 mt-1">{errors.solution}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium">Image</label>
                        <input id="image" type="file" name="image" onChange={handleChange} className="mt-1 block w-full border border-green-500 p-2 rounded" />
                        {errors.image && <div className="text-red-500 mt-1">{errors.image}</div>}
                    </div>
                    <button type="submit" disabled={processing} className="bg-green-500 text-black px-4 py-2 rounded">
                        Update Exercise
                    </button>
                    <Link href={route('admin.exercises.index')} className="ml-2 bg-gray-500 text-black px-4 py-2 rounded">
                        Cancel
                    </Link>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;