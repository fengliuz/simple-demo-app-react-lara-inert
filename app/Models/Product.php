<?php

namespace App\Models;

use App\Models\Cart;
use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $fillable = ['name','category_id','price','description','image','stock'];
    public function category()
{
    return $this->belongsTo(Category::class);
}
     public function items(){
        return $this->hasMany(CartItem::class);
    }
}
