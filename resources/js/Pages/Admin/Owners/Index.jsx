import AuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';

import { Head } from '@inertiajs/react';


import OwnerList from '@/Components/Admin/Owner/OwnerList';




export default function Index({ auth, owners }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">オーナー一覧</h2>}
        >
            <Head title="オーナー一覧" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <OwnerList owners={owners} />

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
