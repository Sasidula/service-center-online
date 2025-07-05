import React from "react"
import {
    WrenchIcon,
    DropletIcon,
    GaugeIcon,
    BatteryChargingIcon
} from "lucide-react"
export function ServiceSelection() {
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
    return (
        <section id="services" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Choose from our range of professional automotive services
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  {service.price}
                </span>
                                <button className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                    Select
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
