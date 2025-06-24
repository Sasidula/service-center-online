import React from "react"
import {
    CalendarIcon,
    CarIcon,
    ClockIcon,
    BellIcon,
    WrenchIcon
} from "lucide-react"
export function CustomerDashboard() {
    // Mockup data - would come from API in real implementation
    const upcomingAppointment = {
        date: "2024-02-15",
        time: "10:00 AM",
        service: "Oil Change & Tire Rotation"
    }
    const serviceHistory = [
        {
            date: "2024-01-05",
            service: "Brake Inspection",
            status: "Completed",
            cost: "$89.99"
        },
        {
            date: "2023-12-15",
            service: "Oil Change",
            status: "Completed",
            cost: "$39.99"
        }
    ]
    const reminders = [
        {
            title: "Tire Rotation Due",
            dueDate: "2024-03-01"
        },
        {
            title: "Annual Inspection",
            dueDate: "2024-04-15"
        }
    ]
    return (
        <main className="flex-grow p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">My Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Upcoming Appointment Card */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Next Appointment
                            </h2>
                            <CalendarIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        {upcomingAppointment ? (
                            <div>
                                <p className="text-gray-600">
                                    <ClockIcon className="inline h-4 w-4 mr-2" />
                                    {upcomingAppointment.date}
                                </p>
                                <p className="text-gray-600 mt-1">
                                    <WrenchIcon className="inline h-4 w-4 mr-2" />
                                    {upcomingAppointment.service}
                                </p>
                                <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    Reschedule
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-600">No upcoming appointments</p>
                        )}
                    </div>
                    {/* Vehicle Information Card */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                My Vehicle
                            </h2>
                            <CarIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-600">Toyota Camry 2019</p>
                            <p className="text-gray-600 mt-1">Mileage: 45,000</p>
                            <button className="mt-4 text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                                Update Info
                            </button>
                        </div>
                    </div>
                    {/* Service Reminders Card */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Reminders</h2>
                            <BellIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-3">
                            {reminders.map((reminder, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-gray-600">{reminder.title}</span>
                                    <span className="text-sm text-gray-500">
                    Due: {reminder.dueDate}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Service History Section */}
                <div className="mt-8 bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">
                            Service History
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 text-gray-600">Date</th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Service
                                    </th>
                                    <th className="text-left py-3 px-4 text-gray-600">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-4 text-gray-600">Cost</th>
                                </tr>
                                </thead>
                                <tbody>
                                {serviceHistory.map((service, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-3 px-4 text-gray-600">
                                            {service.date}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {service.service}
                                        </td>
                                        <td className="py-3 px-4">
                        <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                          {service.status}
                        </span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {service.cost}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
