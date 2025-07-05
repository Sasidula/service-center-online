import React from "react"
import {CarIcon, LucideUserCircle, UserPlus, UserIcon, MenuIcon, UserCircle} from "lucide-react"
import {useNavigate} from "react-router-dom";
export function Navigation() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/" }>
                        <CarIcon className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">
                            AutoCare Plus
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                             href="/#hero"
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/#services"
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => window.location.href = "/login" } className="bg-blue-600 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium mr-4">
                            <UserIcon className="h-4 w-4 mr-2" />
                            Sign In
                        </button>
                        <button onClick={() => window.location.href = "/register"} className="bg-blue-600 text-white flex items-center px-4 py-2 md-6  rounded-md text-sm font-medium">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Register
                        </button>
                        <button className="md:hidden ml-4">
                            <MenuIcon className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
//<UserCircle className="inline h-8 w-8 mr-2"/>