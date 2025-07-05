<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ReminderController;

// Public routes
Route::get('/', [ServiceController::class, 'bookingForm'])->name('booking.form');
Route::post('/submit-booking', [AppointmentController::class, 'submitBooking'])->name('booking.submit');

// Auth-protected routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::resource('customers', CustomerController::class);
    Route::resource('services', ServiceController::class)->except(['show']);
    Route::resource('appointments', AppointmentController::class)->except(['create', 'store']);
    Route::resource('reminders', ReminderController::class);
});

require __DIR__.'/auth.php';

