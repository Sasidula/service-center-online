import React from "react"
import { CalendarIcon, UsersIcon, ClockIcon, MailWarningIcon } from "lucide-react"
import BookingPopup from "../components/popups/BookingPopup.jsx";
import NewBookigPopup from "../components/popups/NewBookigPopup.jsx";
import CustomersPopup from "../components/popups/CustomersPopup.jsx";
export function AdminDashboard() {
    const [index, setIndex] = React.useState(0);
    const [isBookingPopupOpen, setIsBookingPopupOpen] = React.useState(false)
    const [isNewBookingPopupOpen, setIsNewBookingPopupOpen] = React.useState(false)
    const [isCustomersPopupOpen, setIsCustomersPopupOpen] = React.useState(false)
    // Mockup data - would come from API in real implementation
    const todaysAppointments = [
        {
            time: "09:00 AM",
            customer: "John Doe",
            service: "Oil Change",
            status: "Completed"
        },
        {
            time: "10:30 AM",
            customer: "Jane Smith",
            service: "Brake Inspection",
            status: "In Progress"
        },
        {
            time: "02:00 PM",
            customer: "Mike Johnson",
            service: "Tire Rotation",
            status: "Scheduled"
        }
    ]
    const statistics = {
        completedToday: 5,
        scheduled: 8,
        totalCustomers: 145,
        monthlyRevenue: "$12,450"
    }
    return (
        <main className="flex-grow p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Admin Dashboard
                </h1>
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Completed Today</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {statistics.completedToday}
                                </p>
                            </div>
                            <div className="h-8 w-8 text-green-500" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Scheduled</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {statistics.scheduled}
                                </p>
                            </div>
                            <CalendarIcon className="h-8 w-8 text-blue-500" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Customers</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {statistics.totalCustomers}
                                </p>
                            </div>
                            <UsersIcon className="h-8 w-8 text-purple-500" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Monthly Revenue</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {statistics.monthlyRevenue}
                                </p>
                            </div>
                            <div className="h-8 w-8 text-yellow-500" />
                        </div>
                    </div>
                </div>
                {/* Today's Schedule */}
                <div className="bg-white rounded-lg shadow mb-8">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Today's Schedule
                            </h2>
                            <ClockIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 text-gray-600">Time</th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Customer
                                    </th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Service
                                    </th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {todaysAppointments.map((appointment, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-3 px-4 text-gray-600">
                                            {appointment.time}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {appointment.customer}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {appointment.service}
                                        </td>
                                        <td className="py-3 px-4">
                                            <span
                                                className={`px-2 py-1 text-sm rounded-full ${
                                                    appointment.status === "Completed"
                                                        ? "bg-green-100 text-green-800"
                                                        : appointment.status === "In Progress"
                                                            ? "bg-blue-100 text-blue-800"
                                                            : "bg-gray-100 text-gray-800"
                                                }`}
                                            >
                                              {appointment.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            {appointment.status == "Scheduled" ? (
                                                <button
                                                    className="px-8 py-2 text-sm bg-blue-400 hover:bg-black text-white rounded-full"
                                                    onClickCapture={() => setIndex(index)}
                                                    onClick={() => setIsBookingPopupOpen(true)}
                                                >
                                                    Edit
                                                </button>

                                            ) : (
                                                <button
                                                    className="px-8 py-2 text-sm bg-green-100 hover:bg-rose-100 rounded-full"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            Quick Actions
                        </h2>
                        <div className="space-y-3">
                            <button
                                className="w-full text-left px-6 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
                                onClick={() => setIsNewBookingPopupOpen(true)}
                            >
                                <CalendarIcon className="inline h-4 w-4 mr-2" />
                                Schedule New Appointment
                            </button>
                            <button
                                className="w-full text-left px-6 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
                                onClick={() => setIsCustomersPopupOpen(true)}
                            >
                                <UsersIcon className="inline h-4 w-4 mr-2" />
                                View All Customers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CustomersPopup
                isOpen={isCustomersPopupOpen}
                onClose={() => setIsCustomersPopupOpen(false)}
            />
            <BookingPopup
                isOpen={isBookingPopupOpen}
                onClose={() => setIsBookingPopupOpen(false)}
                index={index}
            />
            <NewBookigPopup
                isOpen={isNewBookingPopupOpen}
                onClose={() => setIsNewBookingPopupOpen(false)}
            />
        </main>

    )
}
