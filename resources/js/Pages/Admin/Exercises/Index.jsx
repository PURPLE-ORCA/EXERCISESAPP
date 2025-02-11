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
            <div className="p-6 bg-black text-green-500">
                <h1 className="text-2xl font-bold mb-4">Exercises</h1>
                <Link href={route('admin.exercises.create')} className="bg-green-500 text-black px-4 py-2 rounded mb-4">
                    Add New Exercise
                </Link>
                <table className="w-full border-collapse border-green-500">
                    <thead>
                        <tr>
                            <th className="border border-green-500 p-2">Title</th>
                            <th className="border border-green-500 p-2">Topic</th>
                            <th className="border border-green-500 p-2">Level</th>
                            <th className="border border-green-500 p-2">Content</th>
                            <th className="border border-green-500 p-2">Solution</th>
                            <th className="border border-green-500 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise) => (
                            <tr key={exercise.id}>
                                <td className="border border-green-500 p-2">{exercise.title}</td>
                                <td className="border border-green-500 p-2">{exercise.topic.name}</td>
                                <td className="border border-green-500 p-2">{exercise.level}</td>
                                <td className="border border-green-500 p-2">{exercise.content}</td>
                                <td className="border border-green-500 p-2">{exercise.solution}</td>
                                <td className="border border-green-500 p-2 flex">
                                    <Link href={route('admin.exercises.edit', exercise.id)} className="bg-green-500 text-black px-2 py-1 rounded mr-2">
                                        <i className='bx bxs-edit-alt'></i>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteClick(exercise)}
                                        className="bg-red-500 text-black px-2 py-1 rounded"
                                    >
                                        <i className='bx bxs-trash'></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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