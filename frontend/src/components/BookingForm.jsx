import React, { useState } from "react"
import {
    CalendarIcon,
    ClockIcon,
    CarIcon,
    UserIcon,
    PhoneIcon,
    MessageSquareIcon, GaugeIcon, DropletIcon, WrenchIcon, BatteryChargingIcon, LockIcon, MailIcon
} from "lucide-react"
export function BookingForm() {

    const services = [
        {
            id: 1,
            name: "Oil Change",
            description: "Regular oil changes to keep your engine running smoothly",
            icon: <DropletIcon className="h-8 w-8 text-blue-600" />,
            price: "$39.99"
        },
        {
            id: 2,
            name: "Diagnostics",
            description: "Full computer diagnostics to identify any issues",
            icon: <GaugeIcon className="h-8 w-8 text-blue-600" />,
            price: "$89.99"
        },
        {
            id: 3,
            name: "Tire Rotation",
            description: "Extend the life of your tires with regular rotation",
            icon: <WrenchIcon className="h-8 w-8 text-blue-600" />,
            price: "$29.99"
        },
        {
            id: 4,
            name: "Battery Service",
            description: "Test and replace your battery if needed",
            icon: <BatteryChargingIcon className="h-8 w-8 text-blue-600" />,
            price: "$49.99"
        }
    ]
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        date: "",
        time: "",
        notes: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        // This would connect to the backend in a real implementation
        console.log("Form submitted:", formData)
        alert("Booking request submitted! We will confirm your appointment soon.")
    }
    // Generate time slots from 8 AM to 6 PM
    const timeSlots = []
    for (let i = 8; i <= 18; i++) {
        const hour = i > 12 ? i - 12 : i
        const ampm = i >= 12 ? "PM" : "AM"
        timeSlots.push(`${hour}:00 ${ampm}`)
        if (i < 18) timeSlots.push(`${hour}:30 ${ampm}`)
    }
    return (
        <section id="booking" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Book Your Appointment
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Schedule your service appointment in just a few clicks
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 md:p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="name"
                                    >
                                        <UserIcon className="inline h-4 w-4 mr-1" /> Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="phone"
                                    >
                                        <PhoneIcon className="inline h-4 w-4 mr-1" /> Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="(123) 456-7890"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="email"
                                    >
                                        <MailIcon className="inline h-4 w-4 mr-1" /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="you@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="email"
                                    >
                                        <LockIcon className="inline h-4 w-4 mr-1" /> Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="email"
                                    >
                                        <LockIcon className="inline h-4 w-4 mr-1" /> Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="vehicle"
                                    >
                                        <CarIcon className="inline h-4 w-4 mr-1" /> Vehicle Model
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicleName"
                                        name="vehicleName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Toyota Camry 2019"
                                        required
                                        value={formData.vehicle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="vehicle"
                                    >
                                        <CarIcon className="inline h-4 w-4 mr-1" /> Vehicle Year
                                    </label>
                                    <input
                                        type="text"
                                        id="vehicleYear"
                                        name="vehicleYear"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="2019"
                                        required
                                        value={formData.vehicle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="date"
                                    >
                                        <CalendarIcon className="inline h-4 w-4 mr-1" /> Preferred
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split("T")[0]}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="time"
                                    >
                                        <ClockIcon className="inline h-4 w-4 mr-1" /> Preferred Time
                                    </label>
                                    <select
                                        id="time"
                                        name="time"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a time slot</option>
                                        {timeSlots.map((slot, index) => (
                                            <option key={index} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="service"
                                    >
                                        <GaugeIcon className="inline h-4 w-4 mr-1" /> Service
                                        Requested
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label
                                        className="block text-gray-700 text-sm font-medium mb-2"
                                        htmlFor="notes"
                                    >
                                        <MessageSquareIcon className="inline h-4 w-4 mr-1" />{" "}
                                        Additional Notes
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Please describe any specific issues or requests..."
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
