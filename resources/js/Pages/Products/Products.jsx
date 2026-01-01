import {  Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import Product from "./Product";
import CartSidebar from "./CartSidebar";

export default function Products({ products }) {
    const { auth } = usePage().props;
    const [selectedProduct, setSelectedProduct] = useState(null);
    function handleSelectedProduct (){
        setSelectedProduct(null)
    }

    return (
        <>
            <Navbar></Navbar>
            <div className=" mt-20 text-slate-50 ">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-10">
                        Products{" "}
                        {auth.user
                            ? `Just For you, ${auth?.user?.username}`
                            : ""}
                    </h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                        {products.map((product) => (
                            <div
                                className="hover:-translate-y-2 transition duration-300 product px-2 bg-slate-900"
                                key={product.id}
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="group">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={`${product.name}`}
                                        className=" border-slate-200 border-4 aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-85 xl:aspect-7/8"
                                    />
                                    <h2 onClick={()=>router.get(`products/${product.category.name}`)} className=" z-10 cursor-pointer text-xl font-bold">
                                        Category : {product.category.name}
                                    </h2>
                                    <h3 className="mt-4 text-sm text-white">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-white">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        }).format(product.price)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedProduct && (
                    <Product selectedProduct={selectedProduct} onSelectedProduct={handleSelectedProduct} />
                )}
            </div>
            {auth.user && (
                <CartSidebar></CartSidebar>
            )}
        </>
    );
}
