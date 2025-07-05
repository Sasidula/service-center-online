<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Appointment;

class AppointmentSeeder extends Seeder
{
    public function run()
    {
        Appointment::insert([
            [
                'customer_id' => 1,
                'service_id' => 1,
                'date' => now()->addDays(1)->toDateString(),
                'time_slot' => '09:00 AM',
                'note' => 'Check engine light on',
                'status' => 'pending'
            ],
            [
                'customer_id' => 2,
                'service_id' => 2,
                'date' => now()->addDays(2)->toDateString(),
                'time_slot' => '10:00 AM',
                'note' => 'Brake noise',
                'status' => 'pending'
            ],
        ]);
    }
}
