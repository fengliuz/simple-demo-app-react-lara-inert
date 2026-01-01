<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request){
        $cart = $request->user()
                ->cart()
                ->with('items.product.category')
                ->first();
        return inertia('Cart/Index',
                            ['cart'=>$cart,]);
    }
    public function add(Product $product ,Request $request)
    {
        $cart = Cart::firstOrCreate([
            'user_id' => $request->user()->id
        ]);

        $item = CartItem::where('cart_id',$cart->id)->where('product_id',$product->id)
                        ->first();
        if($item){
            $item->increment('qty');
        }else{
            CartItem::create([
                    'cart_id' => $cart->id,
                    'product_id' => $product->id,
                    'qty' => 1,
                ]);
        }

        return back()->with('success','Added to Cart');
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CartItem $item)
    {
        $request->validate([
            'qty'=>'required|integer|min:1'
        ]);
        $item->update([
            'qty'=>$request->qty
        ]);
        return back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CartItem $item)
    {
        $item->delete();
        return back();
    }
}
