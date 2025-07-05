@extends('layouts.app')

@section('content')

{{-- Hero Section --}}
<div id="hero" class="bg-blue-700 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="md:flex md:items-center md:justify-between">
            <div class="md:w-1/2">
                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                    Book Your Car Service Online
                </h1>
                <p class="text-lg mb-8 text-blue-100">
                    Easy scheduling, expert service, and peace of mind for your
                    vehicle maintenance needs.
                </p>
                <a href="#booking">
                    <button class="bg-white text-blue-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors">
                        📅 Book Now
                    </button>
                </a>
            </div>
            <div class="mt-10 md:mt-0 md:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=60"
                    alt="Mechanic servicing a car"
                    class="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>
        </div>
    </div>
</div>

{{-- Services Section --}}
<section id="services" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Our Services</h2>
            <p class="mt-4 text-lg text-gray-600">
                Choose from our range of professional automotive services
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            @foreach($services as $service)
            <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div class="mb-4">🛠️</div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">{{ $service->service_name }}</h3>
                <p class="text-gray-600 mb-4">{{ $service->description }}</p>
                <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-blue-600">Rs. {{ $service->price }}</span>
                    <a href="#booking" class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Select</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>

{{-- Booking Section --}}
<section id="booking" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Book Your Appointment</h2>
            <p class="mt-4 text-lg text-gray-600">Schedule your service appointment in just a few clicks</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-6 md:p-8">
                @if(session('success'))
                <script>
                    window.addEventListener('DOMContentLoaded', () => {
                        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    });
                </script>
                <div class="mb-4 bg-green-100 text-green-800 p-4 rounded-md">
                    {{ session('success') }}
                </div>
                @endif
                @if ($errors->any())
                <div class="mb-4 bg-red-100 border border-red-400 text-red-700 p-4 rounded-md">
                    <strong>There were some problems with your input:</strong>
                    <ul class="mt-2 list-disc list-inside">
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                <form action="{{ route('booking.submit') }}" method="POST">
                @csrf
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" value="{{ old('name') }}" placeholder="Full Name" required class="w-full px-4 py-2 border rounded-md" />
                        <input type="number" name="phone_number" value="{{ old('phone_number') }}" required class="w-full px-4 py-2 border rounded-md" />
                        <input type="email" name="email" value="{{ old('email') }}" placeholder="Email" required class="w-full px-4 py-2 border rounded-md md:col-span-2" />
                        <input type="text" name="vehicle_model" value="{{ old('vehicle_model') }}" placeholder="Vehicle Model" required class="w-full px-4 py-2 border rounded-md" />
                        <input type="number" name="vehicle_year" value="{{ old('vehicle_year') }}" placeholder="Vehicle Year" required class="w-full px-4 py-2 border rounded-md" />
                        <input type="date" name="date"  id="date" value="{{ old('date') }}" min="{{ \Carbon\Carbon::now()->format('Y-m-d') }}" required class="w-full px-4 py-2 border rounded-md" />
                        <select name="time_slot" class="w-full px-4 py-2 border rounded-md" required>
                            <option value="">Select Time Slot</option>
                            <option>08:00 AM</option>
                            <option>09:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>01:00 PM</option>
                            <option>02:00 PM</option>
                            <option>03:00 PM</option>
                            <option>04:00 PM</option>
                        </select>
                        <select name="service_id" class="w-full px-4 py-2 border rounded-md md:col-span-2" required>
                            <option value="">Choose Service</option>
                            @foreach($services as $service)
                            <option value="{{ $service->service_id }}" {{ old('service_id') == $service->service_id ? 'selected' : '' }}">
                                {{ $service->service_name }}
                            </option>
                            @endforeach
                        </select>
                        <textarea name="note" rows="4" placeholder="Additional notes (optional)" class="w-full px-4 py-2 border rounded-md md:col-span-2">{{ old('note') }}</textarea>
                    </div>
                    <div class="mt-8">
                        <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<script>
    //const appointments = @json(\App\Models\Appointment::select('date', 'time_slot')->get());
    const appointments = {!! \App\Models\Appointment::select('date', 'time_slot')->get()->toJson() !!};
</script>
<script>
    const timeSlots = [
        '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    function getAvailableSlotsForDate(selectedDate) {
        const used = appointments
            .filter(a => a.date === selectedDate)
            .map(a => a.time_slot);
        return timeSlots.filter(slot => !used.includes(slot));
    }

    document.getElementById("date").addEventListener("change", function () {
        const selectedDate = this.value;
        const slotSelect = document.querySelector("select[name='time_slot']");
        if (!slotSelect) return;

        const available = getAvailableSlotsForDate(selectedDate);
        slotSelect.innerHTML = '<option value="">Select Time Slot</option>' +
            available.map(slot =>
                `<option value="${slot}" ${slot === "{{ old('time_slot') }}" ? 'selected' : ''}>${slot}</option>`
            ).join('');
    });

    // If there's a previously selected date (from validation error), trigger the event to filter slots
    window.addEventListener('DOMContentLoaded', () => {
        const selectedDate = document.getElementById("date").value;
        if (selectedDate) {
            document.getElementById("date").dispatchEvent(new Event("change"));
        }
    });
</script>


@endsection
