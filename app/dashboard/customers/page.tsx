import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        customers?: any;
    };
}) {

    const customersData = searchParams?.customers;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
            </div>
            <Suspense key={customersData}>
                <Table customers={customersData} />
            </Suspense>
        </div>
    );
}