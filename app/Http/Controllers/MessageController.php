<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\PublicMessage;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        if(!(Auth::check())){
            return json_encode(['status' => 'error', 'message' => 'You must be logged in to send messages']);
        }
        broadcast(new PublicMessage($request->message));
        return $request->message;
    }
}
