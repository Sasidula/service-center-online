<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    public function run()
    {
        Customer::insert([
            ['name' => 'Saman Perera', 'phone_number' => '0771234567', 'email' => 'saman@example.com', 'vehicle_model' => 'Toyota Prius', 'vehicle_year' => 2015],
            ['name' => 'Kamal Silva', 'phone_number' => '0712345678', 'email' => 'kamal@example.com', 'vehicle_model' => 'Nissan Leaf', 'vehicle_year' => 2020],
        ]);
    }
}
