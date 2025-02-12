import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Show = ({ exercise }) => {
    return (
        <AuthenticatedLayout>
            <Head title={`Exercise: ${exercise.title}`} />
            <div className="p-8 bg-black text-green-400 min-h-screen flex flex-col items-center">
                <div className="max-w-3xl w-full  p-6 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-extrabold text-green-300 mb-6 text-center border-b border-green-500 pb-2">
                        {exercise.title}
                    </h1>
                    <div className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
                        <span className="bg-gray-800 px-4 py-2 rounded-lg border border-green-500">
                            Topic: {exercise.topic.name}
                        </span>
                        <span className="bg-gray-800 px-4 py-2 rounded-lg border border-green-500">
                            Level: {exercise.level}
                        </span>
                    </div>
                    {exercise.image && (
                        <div className="w-full h-80 overflow-hidden rounded-lg mb-6 shadow-lg">
                            <img
                                src={`/storage/${exercise.image}`}
                                alt={exercise.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="mb-6 p-6 rounded-lg border border-green-500 shadow-md">
                        <h2 className="text-2xl font-bold text-green-300 mb-3">Content</h2>
                        <p className="text-gray-300 leading-relaxed">{exercise.content}</p>
                    </div>
                    <div className="p-6 rounded-lg border border-green-500 shadow-md">
                        <h2 className="text-2xl font-bold text-green-300 mb-3">Solution</h2>
                        <p className="text-gray-300 leading-relaxed">{exercise.solution}</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link
                            href={route('exercises.indexUser')}
                            className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold shadow-md transition duration-300 uppercase tracking-wide"
                        >
                            Back to Exercises
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;