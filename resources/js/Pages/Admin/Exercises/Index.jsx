import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ConfirmationModal from '@/Components/ConfirmationModal';

const Index = ({ exercises }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [exerciseToDelete, setExerciseToDelete] = useState(null);

    const handleDeleteClick = (exercise) => {
        setExerciseToDelete(exercise);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (exerciseToDelete) {
            const { delete: deleteForm } = useForm();
            deleteForm(route('admin.exercises.destroy', exerciseToDelete.id), {
                onSuccess: () => {
                    setModalOpen(false);
                    setExerciseToDelete(null);
                },
                onError: () => {
                    setModalOpen(false);
                    setExerciseToDelete(null);
                },
            });
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setExerciseToDelete(null);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Exercises" />
            <div className="p-8 bg-black text-green-400 min-h-screen flex flex-col items-center">
                <h1 className="text-4xl font-extrabold text-green-300 mb-8 text-center border-b border-green-500 pb-2 w-full max-w-3xl">
                    Manage Exercises
                </h1>
                <Link
                    href={route('admin.exercises.create')}
                    className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold mb-6 shadow-md transition duration-300"
                >
                    + Add New Exercise
                </Link>
                <div className="w-full max-w-6xl overflow-x-auto">
                    <table className="w-full border border-green-500 text-left bg-gray-900 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-green-600 text-black">
                                <th className="p-4">Title</th>
                                <th className="p-4">Topic</th>
                                <th className="p-4">Level</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exercises.map((exercise) => (
                                <tr key={exercise.id} className="border-b border-green-500 hover:bg-gray-800 transition">
                                    <td className="p-4">{exercise.title}</td>
                                    <td className="p-4">{exercise.topic.name}</td>
                                    <td className="p-4">{exercise.level}</td>
                                    <td className="p-4 flex space-x-3">
                                        <Link
                                            href={route('admin.exercises.edit', exercise.id)}
                                            className="text-black py-1 rounded-lg shadow-md"
                                        >
                                            <i class='bx bxs-edit-alt'></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteClick(exercise)}
                                            className=" text-black py-1 rounded-lg shadow-md"
                                        >
                                            <i class='bx bxs-trash' ></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ConfirmationModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                title="Confirm Deletion"
                message="Are you sure you want to delete this exercise?"
            />
        </AuthenticatedLayout>
    );
};

export default Index;