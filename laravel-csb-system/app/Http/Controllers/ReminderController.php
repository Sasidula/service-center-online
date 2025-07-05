<?php

namespace App\Http\Controllers;

use App\Models\Reminder;
use App\Models\Customer;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    /**
     * Display a listing of the reminders.
     */
    public function index()
    {
        $reminders = Reminder::with('customer')->get();
        return view('reminders.index', compact('reminders'));
    }

    /**
     * Show the form for creating a new reminder.
     */
    public function create()
    {
        $customers = Customer::all();
        return view('reminders.create', compact('customers'));
    }

    /**
     * Store a newly created reminder in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,customer_id',
            'topic' => 'required|string|max:255',
            'date' => 'required|date',
        ]);

        Reminder::create($validated);

        return redirect()->route('reminders.index')->with('success', 'Reminder created successfully.');
    }

    /**
     * Display the specified reminder.
     */
    public function show($id)
    {
        $reminder = Reminder::with('customer')->findOrFail($id);
        return view('reminders.show', compact('reminder'));
    }

    /**
     * Show the form for editing the specified reminder.
     */
    public function edit($id)
    {
        $reminder = Reminder::findOrFail($id);
        $customers = Customer::all();
        return view('reminders.edit', compact('reminder', 'customers'));
    }

    /**
     * Update the specified reminder in storage.
     */
    public function update(Request $request, $id)
    {
        $reminder = Reminder::findOrFail($id);

        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,customer_id',
            'topic' => 'required|string|max:255',
            'date' => 'required|date',
        ]);

        $reminder->update($validated);

        return redirect()->route('reminders.index')->with('success', 'Reminder updated successfully.');
    }

    /**
     * Remove the specified reminder from storage.
     */
    public function destroy($id)
    {
        $reminder = Reminder::findOrFail($id);
        $reminder->delete();

        return redirect()->route('reminders.index')->with('success', 'Reminder deleted successfully.');
    }
}
