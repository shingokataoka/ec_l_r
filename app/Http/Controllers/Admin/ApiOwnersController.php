<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Owner;
class ApiOwnersController extends Controller
{
    public function index()
    {
        $owners = Owner::orderBy('id', 'desc')->paginate(2);
        return $owners;
    }
}
