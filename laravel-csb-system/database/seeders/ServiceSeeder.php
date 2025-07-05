<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        Service::insert([
            ['service_name' => 'Oil Change', 'description' => 'Full synthetic oil change', 'price' => 5000],
            ['service_name' => 'Brake Repair', 'description' => 'Front and rear brake pads', 'price' => 8000],
            ['service_name' => 'Engine Diagnostics', 'description' => 'Engine scanning and fault analysis', 'price' => 3500],
        ]);
    }
}
