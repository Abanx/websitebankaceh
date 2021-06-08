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

// list/index berita
Route::get('/beranda/berita/list/{id}', function () {
    return view('berita.index');
});

// halaman berita
Route::get('/beranda/berita/{id}/{judul}', function ($id, $judul) {
    return view('berita.show')->with(['id'=>$id, 'judul'=>$judul]);
}); 

Route::get('/admin', function(){
    return view('admin.login');
});

Route::get('/admin/dashboard', function(){
    return view('admin.dashboard');
});

// halaman/list Blog
Route::get('/{level}/list/{id}', function ($level) {
    return view('blogs.bloglist');
})->where('level', '.*');

// halaman/page Blog
Route::get('/{path}/page/{id}', function ($path, $id) {
    return view('blogs.blogpage')->with(['path'=>$path, 'id'=>$id]);
})->where('path', '.*');




