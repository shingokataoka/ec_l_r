<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


require __DIR__.'/auth.php';
Route::prefix('admin')->name('admin.')->group(function() {
    require __DIR__.'/admin.php';
});
Route::prefix('owner')->name('owner.')->group(function() {
    require __DIR__.'/owner.php';
});

Route::prefix('admin/api')->name('admin.api.')->middleware('auth:admin')->group(function() {
    require __DIR__ . '/apiAdmin.php';
});
