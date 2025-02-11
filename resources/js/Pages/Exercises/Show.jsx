import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Show = ({ exercise }) => {
    return (
        <AuthenticatedLayout>
            <Head title={`Exercise: ${exercise.title}`} />
            <div className="p-6 bg-black text-green-500">
                <h1 className="text-2xl font-bold mb-4">{exercise.title}</h1>
                <p className="text-sm mb-2">Topic: {exercise.topic.name}</p>
                <p className="text-sm mb-2">Level: {exercise.level}</p>
                {exercise.image && (
                    <img src={`/storage/${exercise.image}`} alt={exercise.title} className="w-full h-64 object-cover mb-4" />
                )}
                <div className="mb-4">
                    <h2 className="text-lg font-bold mb-2">Content</h2>
                    <div className="whitespace-pre-wrap">{exercise.content}</div>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Solution</h2>
                    <div className="whitespace-pre-wrap"><a href={exercise.solution}>Link to solution</a></div>
                </div>
                <Link href={route('exercises.indexUser')} className="bg-gray-500 text-black px-4 py-2 rounded mt-4">
                    Back to Exercises
                </Link>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;