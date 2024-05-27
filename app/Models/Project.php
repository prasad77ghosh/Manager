<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = "string";

    protected $fillable = ['image_path', 'name', 'description', 'status', 'due_date', 'created_by', 'updated_by'];

    protected static function boot(){
        parent::boot();
        static::creating(function ($model) {
            if(empty($model -> {$model->getKeyName()})){
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    public function tasks(){
        return $this->hasMany(Task::class);
    }

    public function createdBy() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy() {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
