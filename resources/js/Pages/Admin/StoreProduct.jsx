import { router, useForm, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        category_id: "",
        description: "",
        image: null,
    });
    console.log(errors)
    const submit = (e) => {
        e.preventDefault();
        post("/products", {
            forceFormData: true,
        },{
            onSuccess: ()=>alert('succes adding product')
        });
    };
    const {auth} = usePage().props
    if(!auth?.user?.is_admin){
        return(
            <div className="flex justify-center items-center text-center h-full">

            <h1 className=" font-extrabold text-red-500  self-center text-9xl text-center">Not allowed</h1>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="mt-24 max-w-xl mx-auto bg-slate-900 p-6 rounded text-white">
                <h1 className="text-2xl font-bold mb-4">Add Product</h1>

                <form onSubmit={submit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Product name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full p-2 text-white"
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="w-full p-2 text-white"
                    />

                    <input
                        type="number"
                        placeholder="Category ID"
                        value={data.category_id}
                        onChange={(e) =>
                            setData("category_id", e.target.value)
                        }
                        className="w-full p-2 text-white"
                    />

                    <textarea
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                        className="w-full p-2 text-white"
                    />

                    <input
                        type="file"
                        onChange={(e) =>
                            setData("image", e.target.files[0])
                        }
                        className="w-full"
                    />

                    <button
                        disabled={processing}
                        className="bg-blue-600 px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </form>
            </div>
                {errors?.name && (
                    <h1 className=" text-red-500 text-xl text-center">{errors.name}</h1>
                )}
                {errors?.price && (
                    <h1 className=" text-red-500 text-xl text-center">{errors.price}</h1>
                )}
                {errors?.category_id && (
                    <h1 className=" text-red-500 text-xl text-center">{errors.category_id}</h1>
                )}
                {errors?.image && (
                    <h1 className=" text-red-500 text-xl text-center">{errors.image}</h1>
                )}
        </>
    );
}
