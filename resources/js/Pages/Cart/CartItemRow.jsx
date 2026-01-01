import { Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function CartItemRow({ item }) {
    const [qty, setQty] = useState(item.qty);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (qty !== item.qty) {
                router.patch(
                    `/cart/item/${item.id}`,
                    { qty },
                    {
                        preserveScroll: true,
                        preserveState: true,
                    }
                );
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [qty]);

    return (
        <div className="">
           
        <div className="flex justify-between items-center py-4 border-b border-slate-700">
            <h3 className=" text-3xl">{item.product.name}</h3>
            <h2>Category : {item.product.category.name}</h2>
        </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-3 bg-slate-700 rounded"
                >
                    −
                </button>

                <span>{qty}</span>

                <button
                    onClick={() => setQty((q) => q + 1)}
                    className="px-3 bg-slate-700 rounded"
                >
                    +
                </button>
            </div>
        </div>
    );
}
