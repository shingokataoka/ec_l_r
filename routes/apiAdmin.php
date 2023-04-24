<?php

use App\Http\Controllers\Admin\ApiOwnersController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('owners', [ApiOwnersController::class, 'index'])
    ->name('owners.index');
