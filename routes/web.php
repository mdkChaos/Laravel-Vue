<?php

use App\Http\Controllers\{PersonController, HomeController};
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/persons', [PersonController::class, 'index'])->name('posts');
