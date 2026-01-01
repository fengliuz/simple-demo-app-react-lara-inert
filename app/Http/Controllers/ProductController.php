<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Products/Products',[
            'products'=>Product::with('category')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         return inertia('Admin/StoreProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $data = $request->validate([
        'name' => 'required',
        'price' => 'required|numeric',
        'category_id' => 'required',
        'description' => 'nullable',
        'image' => 'required|image|mimes:jpg,png,jpeg,webp|max:2048',
    ]);
    // upload gambar
    $data['image'] = $request->file('image')
        ->store('products', 'public');

    Product::create($data);

    return redirect()->route('products.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
         return inertia('Products/Product', [
        'product' => $product->load('category')
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
