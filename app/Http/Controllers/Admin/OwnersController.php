<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Owner;

class OwnersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $owners = Owner::orderBy('id', 'desc')->paginate(2);
// dd($owners);
        return Inertia::render('Admin/Owners/Index', compact('owners'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return [
            'name2' => $request->name,
            'password2' => $request->password,
        ];
        dd(__FUNCTION__);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return [
            'id2' => $request->id,
            'name2' => $request->name,
            'password2' => $request->password,
        ];
        dd($request->id,$request->name, 'storeだしInsert');
        dd(__FUNCTION__);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd($id, 'SHOW');
        dd(__FUNCTION__);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        dd($id, 'EDIT');
        dd(__FUNCTION__);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return [
            'name2' => $request->name,
            'password2' => $request->password,
        ];
        dd($request->name, $request->password, 'Updateで楊貴妃が強化された');
        dd(__FUNCTION__);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $owner = Owner::findOrFail($id)->delete();
    }
}
