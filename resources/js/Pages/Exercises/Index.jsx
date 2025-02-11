import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Index = ({ exercises }) => {
    return (
        <AuthenticatedLayout>
            <Head title="Exercises" />
            <div className="p-6 bg-black text-green-500">
                <h1 className="text-2xl font-bold mb-4">Exercises</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">{exercise.title}</h2>
                            <p className="text-sm mb-2">Topic: {exercise.topic.name}</p>
                            <p className="text-sm mb-2">Level: {exercise.level}</p>
                            {exercise.image && (
                                <img src={`/storage/${exercise.image}`} alt={exercise.title} className="w-full h-40 object-cover mb-2" />
                            )}
                            <Link href={route('exercises.show', exercise.id)} className="bg-green-500 text-black px-4 py-2 rounded">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;