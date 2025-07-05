<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            ServiceSeeder::class,
            CustomerSeeder::class,
            AppointmentSeeder::class,
            ReminderSeeder::class,
        ]);
    }
}
