<?php

use App\Http\Controllers\{PersonController, HomeController, IndexController};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/{page}', [IndexController::class, 'index'])->where('page', '.*');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
