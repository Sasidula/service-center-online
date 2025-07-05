<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = 'customer_id';

    protected $fillable = [
        'name', 'phone_number', 'email', 'vehicle_model', 'vehicle_year',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'customer_id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class, 'customer_id');
    }
}
