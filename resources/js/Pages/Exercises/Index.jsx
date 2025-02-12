import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Index = () => {
    const { exercises } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Exercises" />
            <div className="p-8 bg-black text-green-400 min-h-screen flex flex-col items-center">
                <h1 className="text-4xl font-extrabold text-green-300 mb-8 text-center border-b border-green-500 pb-2 w-full max-w-3xl">
                    Exercises
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {exercises.data.map((exercise) => (
                        <div
                            key={exercise.id}
                            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform border border-green-500"
                        >
                            <h2 className="text-2xl font-bold text-green-300 mb-3">{exercise.title}</h2>
                            <p className="text-sm text-gray-400">Topic: {exercise.topic.name}</p>
                            <p className="text-sm text-gray-400 mb-4">Level: {exercise.level}</p>
                            <Link
                                href={route('exercises.show', exercise.id)}
                                className="block text-black px-2 py-3 rounded-lg font-semibold text-center shadow-md transition duration-300"
                            >
                                View exercise
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center space-x-2">
                    {exercises.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-colors shadow-md ${
                                    link.active
                                        ? 'bg-green-500 text-black'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <span
                                key={link.label}
                                className="px-4 py-2 rounded-lg text-lg bg-gray-800 text-gray-500 cursor-not-allowed shadow-md"
                            >
                                {link.label}
                            </span>
                        )
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;