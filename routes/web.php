<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/','/dashboard');



// Routes accessible only by admins
Route::middleware(['auth', 'verified', 'admin'])->group(function() {
    // Project resource routes
    Route::resource('project', ProjectController::class);

    // All task resource routes (admins can access everything)
    Route::get('/task/create', [TaskController::class, 'create'])->name('task.create');
    Route::get('/task', [TaskController::class, 'index'])->name('task.index');
    Route::post('/task', [TaskController::class, 'store'])->name('task.store');
    Route::delete('/task/{task}', [TaskController::class, 'destroy'])->name('task.destroy');

    // User resource routes
    Route::resource('user', UserController::class);
});

// Routes accessible by both users and admins
Route::middleware(['auth', 'verified'])->group(function() {
    // Example route accessible by both users and admins
    Route::get('/dashboard', fn() => Inertia::render("Dashboard"))->name('dashboard');

    // Route to view user's tasks
    Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])->name('task.myTasks');
    // Explicitly defining the task edit route for users
    Route::get('/task/{task}/edit', [TaskController::class, 'edit'])->name('task.edit');
    
    // Additional task routes that users should access
    Route::get('/task/{task}', [TaskController::class, 'show'])->name('task.show');
    Route::put('/task/{task}', [TaskController::class, 'update'])->name('task.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
