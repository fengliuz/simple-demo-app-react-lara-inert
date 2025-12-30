<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::middleware('auth')->group(function(){
    Route::get('/', function () {
        return inertia('Home');
    });
    Route::post('/logout',[AuthController::class,'logout']);
});

Route::middleware('guest')->group(function(){
    Route::get('/login',[AuthController::class,'showLogin'])->name('login');
    Route::get('/register',[AuthController::class,'showRegister']);
    Route::post('/login',[AuthController::class,'login']);
    Route::post('/register',[AuthController::class,'register']);
});
// Route::get('/user',[UserController::class,'index'])->middleware('');
