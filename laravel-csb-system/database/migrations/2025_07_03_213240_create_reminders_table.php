<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reminders', function (Blueprint $table) {
            $table->id('reminder_id');
            $table->foreignId('customer_id')->constrained('customers');
            $table->string('topic');
            $table->date('date');
            $table->timestamps();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('reminders');
    }
};
