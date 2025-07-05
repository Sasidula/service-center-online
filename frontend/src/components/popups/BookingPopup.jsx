import React from 'react';

function ReminderPopup({ isOpen, onClose, index }) {
    if (!isOpen) return null;

    const [formData, setFormData] = React.useState({
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    // Generate time slots from 8 AM to 6 PM
    const timeSlots = []
    for (let i = 8; i <= 18; i++) {
        const hour = i > 12 ? i - 12 : i
        const ampm = i >= 12 ? "PM" : "AM"
        timeSlots.push(`${hour}:00 ${ampm}`)
        if (i < 18) timeSlots.push(`${hour}:30 ${ampm}`)
    }

    return (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Appointment</h2>
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Time Slot
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
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Save
                            </button>
                            <button
                                onClick={onClose}
                                className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Delete
                            </button>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReminderPopup;