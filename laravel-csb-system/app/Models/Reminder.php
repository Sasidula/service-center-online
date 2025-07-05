<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;

    protected $primaryKey = 'reminder_id';

    protected $fillable = ['customer_id', 'topic', 'date'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
