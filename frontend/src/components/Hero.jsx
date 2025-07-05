import React from "react"
import { CalendarIcon } from "lucide-react"
export function Hero() {
    return (
        <div id ="hero" className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Book Your Car Service Online
                        </h1>
                        <p className="text-lg mb-8 text-blue-100">
                            Easy scheduling, expert service, and peace of mind for your
                            vehicle maintenance needs.
                        </p>
                        <a href="#booking">
                            <button className="bg-white text-blue-700 flex items-center px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors">
                                <CalendarIcon className="h-5 w-5 mr-2" />
                                Book Now
                            </button>
                        </a>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            alt="Mechanic servicing a car"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
