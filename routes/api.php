<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MemberController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('members', function(){
//     return 'this is a fuction';
// });

Route::get('members', [MemberController::class, 'index']);
Route::post('members', [MemberController::class, 'addMember']);
Route::get('members/{id}', [MemberController::class, 'getMember']);
Route::get('members/{id}/edit', [MemberController::class, 'editMember']);
Route::get('members/{id}/edit', [MemberController::class, 'updateMember']);
Route::get('members/{id}/delete', [MemberController::class, 'deleteMember']);