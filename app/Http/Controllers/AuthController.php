<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showLogin(){
        return inertia('Login');
    }
    public function showRegister(){
        return inertia('Register');
    }

    public function login(Request $request){
        $user = User::where('username',$request->username)->first();
        if(!$user || !Hash::check($request->password,$user->password)){
            return back()->withErrors(['auth'=>'Username or Password is wrong']);
        }
        Auth::login($user);
        $request->session()->regenerate();
        return redirect('/');
    }
    public function register(Request $request){
        $validate =  $request->validate([
            'full_name'=>'required|min:3',
            'username'=>'required|min:3|unique:users,username|regex:/^[a-zA-Z0-9._]+$/',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:6'
        ]);
        $validate['password'] = Hash::make($validate['password']);
        $user = User::create($validate);
        Auth::login($user);
        $request->session()->regenerate();
        return redirect()->intended('/');
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();   // hapus semua session
        $request->session()->regenerateToken(); // regenerasi CSRF token

    return redirect('/login');
    }
}
