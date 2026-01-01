import { Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar";
import CartItemRow from "./CartItemRow";

export default function CartIndex({ cart }) {
    if (!cart || cart.items.length === 0) {
        return (
            <>
                <Navbar />
            <div className="max-w-4xl mx-auto mt-24 px-4 text-center text-white">
                <Link
                    href={`/products`}
                    className=" rounded-sm hover:text-white transition duration-200 font-bold cursor-pointer w-1/2 top-1/2 text-5xl text-indigo-600"
                    >
                    Back Shop Collection &laquo;
                </Link>
                <div className="mt-24 text-center text-slate-400">
                    Your cart is empty
                </div>
                    </div>
            </>
        );
    }

    const total = cart.items.reduce(
        (sum, item) => sum + item.product.price * item.qty,
        0
    );

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto mt-24 px-4 text-white">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                <Link
                    href={`/products`}
                    className=" bg-slate-900 px-5 rounded-sm hover:text-white transition duration-200 font-bold cursor-pointer w-1/2 left-0 top-1/2 text-5xl text-indigo-600"
                >
                    Back Shop Collection &laquo;
                </Link>
                <div className="bg-slate-900 rounded-lg p-6">
                    {cart.items.map((item) => (
                        <CartItemRow key={item.id} item={item} />
                    ))}

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-700">
                        <h2 className="text-xl font-bold">Total</h2>
                        <p className="text-2xl font-bold">
                            Rp {total.toLocaleString("id-ID")}
                        </p>
                    </div>

                    <button className="mt-6 w-full bg-indigo-600 py-3 rounded text-lg hover:bg-indigo-700 transition">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}
