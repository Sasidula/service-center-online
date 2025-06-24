import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { ServiceSelection } from "./components/ServiceSelection"
import { BookingForm } from "./components/BookingForm"
import { Footer } from "./components/Footer"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { CustomerDashboard } from "./pages/CustomerDashboard"
import { AdminDashboard } from "./pages/AdminDashboard"
export function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main className="flex-grow">
                                <Hero />
                                <ServiceSelection />
                                <BookingForm />
                            </main>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard/*" element={<CustomerDashboard />} />
                    <Route path="/admin/*" element={<AdminDashboard />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
