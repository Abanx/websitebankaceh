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

Route::get('/beranda/berita', function () {
    return view('berita.index');
});

Route::get('/beranda/berita/{id}/{judul}', function ($id, $judul) {
    return view('berita.show')->with(['id'=>$id, 'judul'=>$judul]);
});

Route::get('/admin', function(){
    return view('admin.login');
});

Route::get('/admin/dashboard', function(){
    return view('admin.dashboard');
});
