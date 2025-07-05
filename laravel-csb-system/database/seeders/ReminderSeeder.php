<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reminder;

class ReminderSeeder extends Seeder
{
    public function run()
    {
        Reminder::insert([
            ['customer_id' => 1, 'topic' => 'Oil change reminder', 'date' => now()->addMonth()],
            ['customer_id' => 2, 'topic' => 'Annual service', 'date' => now()->addMonths(2)],
        ]);
    }
}
