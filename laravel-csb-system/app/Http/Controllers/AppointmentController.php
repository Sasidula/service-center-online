<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Customer;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the appointments.
     */
    public function index()
    {
        $appointments = Appointment::with('customer', 'service')->get();
        return view('appointments.index', compact('appointments'));
    }

    /**
     * Show the form for creating a new appointment.
     */
    public function create()
    {
        $customers = Customer::all();
        $services = Service::all();
        return view('appointments.create', compact('customers', 'services'));
    }

    /**
     * Store a newly created appointment in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,customer_id',
            'service_id' => 'required|exists:services,service_id',
            'date' => 'required|date',
            'time_slot' => 'required|string|max:50',
            'note' => 'nullable|string',
            'status' => 'required|in:pending,in-progress,completed,cancelled',
        ]);

        Appointment::create($validated);

        return redirect()->route('appointments.index')->with('success', 'Appointment created successfully.');
    }

    /**
     * Display the specified appointment.
     */
    public function show($id)
    {
        $appointment = Appointment::with('customer', 'service')->findOrFail($id);
        return view('appointments.show', compact('appointment'));
    }

    /**
     * Show the form for editing the specified appointment.
     */
    public function edit($id)
    {
        $appointment = Appointment::findOrFail($id);
        $customers = Customer::all();
        $services = Service::all();
        return view('appointments.edit', compact('appointment', 'customers', 'services'));
    }

    /**
     * Update the specified appointment in storage.
     */
    public function update(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);

        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,customer_id',
            'service_id' => 'required|exists:services,service_id',
            'date' => 'required|date',
            'time_slot' => 'required|string|max:50',
            'note' => 'nullable|string',
            'status' => 'required|in:pending,in-progress,completed,cancelled',
        ]);

        $appointment->update($validated);

        return redirect()->route('appointments.index')->with('success', 'Appointment updated successfully.');
    }

    /**
     * Remove the specified appointment from storage.
     */
    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();

        return redirect()->route('appointments.index')->with('success', 'Appointment deleted successfully.');
    }

    public function submitBooking(Request $request)
    {
        // Manual validator so we can redirect with errors
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'vehicle_model' => 'required|string|max:255',
            'vehicle_year' => 'required|numeric|digits:4',
            'service_id' => 'required|exists:services,service_id',
            'note' => 'nullable|string|max:1000',
            'date' => 'required|date|after_or_equal:today',
            'time_slot' => [
                'required',
                Rule::unique('appointments')->where(function ($query) use ($request) {
                    return $query->where('date', $request->input('date'));
                }),
            ],
        ]);

        // If validation fails
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $validated = $validator->validated();

        // Find or create customer
        $customer = Customer::firstOrCreate(
            ['email' => $validated['email']],
            [
                'name' => $validated['name'],
                'phone_number' => $validated['phone_number'],
                'vehicle_model' => $validated['vehicle_model'],
                'vehicle_year' => $validated['vehicle_year'],
            ]
        );

        // Create appointment
        Appointment::create([
            'customer_id' => $customer->customer_id,
            'service_id' => $validated['service_id'],
            'date' => $validated['date'],
            'time_slot' => $validated['time_slot'],
            'note' => $validated['note'],
            'status' => 'pending',
        ]);

        return redirect()->route('booking.form')->with('success', 'Appointment booked successfully!');
    }
}
