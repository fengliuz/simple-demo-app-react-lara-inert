<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
Route::middleware('auth')->group(function(){
    Route::post('/logout',[AuthController::class,'logout']);
    Route::post('/cart/add/{product}', [CartController::class, 'add']);
    Route::patch('/cart/item/{item}', [CartController::class, 'update']);
    Route::delete('/cart/item/{item}', [CartController::class, 'destroy']);
    Route::get('/cart',[CartController::class,'index']);

});

Route::middleware('guest')->group(function(){
    Route::get('/login',[AuthController::class,'showLogin'])->name('login');
    Route::get('/register',[AuthController::class,'showRegister']);
    Route::post('/login',[AuthController::class,'login']);
    Route::post('/register',[AuthController::class,'register']);
});

Route::resource('products',ProductController::class);
Route::get('/', function () {
    return inertia('Home');
});
  Route::get('/products/create', [ProductController::class, 'create'])
        ->name('products.create');
