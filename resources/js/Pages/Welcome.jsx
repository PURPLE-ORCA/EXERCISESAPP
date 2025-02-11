import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black dark:bg-black dark:text-white min-h-screen flex items-center justify-center">
                <div className="text-center p-6 max-w-lg">
                    <h1 className="text-4xl font-bold mb-4 text-green-500">Welcome to the Developer Exercises Platform</h1>
                    <p className="text-lg mb-6">
                        Practice and improve your skills with a variety of exercises across different topics like Python, JavaScript, CSS, and Tailwind.
                    </p>
                    <Link href={auth.user ? route('admin.exercises.index') : route('login')} className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                        {auth.user ? 'Go to Exercises' : 'Login to Start'}
                    </Link>
                </div>
            </div>
        </>
    );
}