<?php

use App\Events\Hello;
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

Route::get('/test', function () {
    broadcast(new Hello());
});
Route::get('/{path?}', function () {
    return view('app');
})->where('path', '.*');


