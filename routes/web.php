<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\VideoController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/sample', [SampleController::class, 'index'])->name('sample.index');

Route::middleware('auth')->prefix('videos')->group(function () {
    Route::get('/', [VideoController::class, 'index'])->name('video.index');
    Route::get('/detail/{id}', [VideoController::class, 'show'])->name('video.show');
    Route::get('/create', [VideoController::class, 'create'])->name('video.create');
    Route::get('/edit/{id}', [VideoController::class, 'edit'])->name('video.edit');
    Route::post('/store', [VideoController::class, 'store'])->name('video.store');
    Route::put('/update/{id}', [VideoController::class, 'update'])->name('video.update');
    Route::delete('/delete/{id}', [VideoController::class, 'destroy'])->name('video.destroy');
});

require __DIR__ . '/auth.php';
