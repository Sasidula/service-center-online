import React, {useState} from 'react';
import {
    ArrowRight,
    UserIcon
} from "lucide-react";

function CustomersPopup({ isOpen, onClose }) {

    if (!isOpen) return null;

    const Customers = [
        {
            id: 1,
            name: "John Doe",
            email: "r2V0A@example.com",
            phone: "+1 (123) 456-7890",
            address: "123 Main St, Anytown, USA"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "BqNt8@example.com",
            phone: "+1 (987) 654-3210",
            address: "456 Elm St, Anytown, USA"
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "BqNt8@example.com",
            phone: "+1 (987) 654-3210",
            address: "456 Elm St, Anytown, USA"
        }
    ]

    return (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-10/12 max-h-10/12 shadow-lg overflow-y-auto ">
                <div className="flex">
                    <UserIcon className="inline h-10 w-10 mr-3" />
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Customers</h2>
                    <div className="ml-auto">
                        <ArrowRight className="inline h-10 w-10 mr-1 justify-end" onClick={onClose} />
                    </div>
                </div>
                <div>
                    <table className="w-full ">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Phone</th>
                                <th className="px-4 py-2 text-left">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="border px-4 py-2">{customer.name}</td>
                                    <td className="border px-4 py-2">{customer.email}</td>
                                    <td className="border px-4 py-2">{customer.phone}</td>
                                    <td className="border px-4 py-2">{customer.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CustomersPopup;