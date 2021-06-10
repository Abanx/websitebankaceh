<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/admin', function(){
    return view('admin.login');
});

Route::get('/admin/dashboard', function(){
    return view('admin.dashboard');
});

Route::get('/admin/users', function(){
    return view('admin.users');
});

Route::get('/admin/blogs', function(){
    return view('admin.blogs');
});
