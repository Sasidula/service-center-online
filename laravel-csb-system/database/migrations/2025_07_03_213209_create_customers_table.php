<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id('customer_id');
            $table->string('name');
            $table->string('phone_number');
            $table->string('email')->unique();
            $table->string('vehicle_model');
            $table->year('vehicle_year');
            $table->timestamps();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
