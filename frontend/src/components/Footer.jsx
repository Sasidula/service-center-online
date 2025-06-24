import React from "react"
import {
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    MailIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon
} from "lucide-react"
export function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">AutoCare Plus</h3>
                        <p className="text-gray-300 mb-4">
                            Professional car service and maintenance center dedicated to
                            keeping your vehicle in top condition.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FacebookIcon className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <TwitterIcon className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <InstagramIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPinIcon className="h-5 w-5 mr-2 mt-1 text-blue-400" />
                                <span>123 Auto Street, Cartown, CA 90210</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="h-5 w-5 mr-2 text-blue-400" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="h-5 w-5 mr-2 text-blue-400" />
                                <span>service@autocareplus.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <ClockIcon className="h-5 w-5 mr-2 text-blue-400" />
                                <div>
                                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} AutoCare Plus. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
