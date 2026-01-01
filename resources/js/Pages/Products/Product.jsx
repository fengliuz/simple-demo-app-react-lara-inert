import { usePage, router } from "@inertiajs/react";

export default function Product({ selectedProduct, onSelectedProduct }) {
    const { auth } = usePage().props;

    const addToCart = (productId) => {
        if (!auth.user) {
            return alert("Pls Login  first! To adding product into cart");
        }
        router.post(
            `/cart/add/${productId}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => alert("Added to cart!"),
            }
        );
    };
    return (
        <div className="top-1/14 rounded-md border-slate-900 border-8 z-1 bg-black/90 flex items-center justify-center w-full p-3 fixed">
            <p
                onClick={onSelectedProduct}
                className="cursor-pointer text-red-500 font-extrabold absolute right-2 top-0 text-4xl lg:text-8xl"
            >
                &times;
            </p>
            <div className="pt-6">
                {/* <!-- Image gallery --> */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                    <img
                        src={`/storage/${selectedProduct.image}`}
                        alt="Two each of gray, white, and black shirts laying flat."
                        className="row-span-2 aspect-3/4 size-full rounded-lg object-contain max-lg:hidden"
                    />

                    {/* <!-- Product info --> */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-none lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
                                {selectedProduct.name}
                            </h1>
                            <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
                                Category: {selectedProduct.category.name}
                            </h1>
                        </div>
                    </div>

                    {/* <!-- Options --> */}
                    <div className="mt-4 lg:row-span-3 lg:mt-55">
                        <p className="text-2xl  font-bold tracking-tight text-slate-200">
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }).format(selectedProduct.price)}
                        </p>

                        {/* <!-- Reviews --> */}
                        <div className="mt-6">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                                    {/* <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-900"
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-900"
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-900"
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-900"
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className="size-5 shrink-0 text-gray-200"
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg> */}
                                </div>
                                <p
                                    href="#"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {selectedProduct.stock} Stocks Remain
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            {/* <!-- Colors --> */}
                            {/* <div>
                                            <h3 className="text-sm font-medium text-gray-900">
                                                Color
                                            </h3>

                                            <fieldset
                                                aria-label="Choose a color"
                                                className="mt-4"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="white"
                                                            checked
                                                            aria-label="White"
                                                            className="size-8 appearance-none rounded-full bg-white forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                                                        />
                                                    </div>
                                                    <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="gray"
                                                            aria-label="Gray"
                                                            className="size-8 appearance-none rounded-full bg-gray-200 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                                                        />
                                                    </div>
                                                    <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="black"
                                                            aria-label="Black"
                                                            className="size-8 appearance-none rounded-full bg-gray-900 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-900 focus-visible:outline-3 focus-visible:outline-offset-3"
                                                        />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div> */}

                            {/* <!-- Sizes --> */}
                            {/* <div className="mt-10">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    Size
                                                </h3>
                                                <a
                                                    href="#"
                                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Size guide
                                                </a>
                                            </div>

                                            <fieldset
                                                aria-label="Choose a size"
                                                className="mt-4"
                                            >
                                                <div className="grid grid-cols-4 gap-3">
                                                    <label
                                                        aria-label="XXS"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            disabled
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            XXS
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="XS"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            XS
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="S"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            checked
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            S
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="M"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            M
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="L"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            L
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="XL"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            XL
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="2XL"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            2XL
                                                        </span>
                                                    </label>
                                                    <label
                                                        aria-label="3XL"
                                                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="size"
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            3XL
                                                        </span>
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div> */}

                            <button
                                type="submit"
                                onClick={() => addToCart(selectedProduct.id)}
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 e font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden transition duration-150 text-2xl"
                            >
                                <svg
                                    className=" mr-5"
                                    viewBox="-0.5 0 25 25"
                                    width={50}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M18.5996 21.57C19.7042 21.57 20.5996 20.6746 20.5996 19.57C20.5996 18.4654 19.7042 17.57 18.5996 17.57C17.495 17.57 16.5996 18.4654 16.5996 19.57C16.5996 20.6746 17.495 21.57 18.5996 21.57Z"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                            d="M8.59961 21.57C9.70418 21.57 10.5996 20.6746 10.5996 19.57C10.5996 18.4654 9.70418 17.57 8.59961 17.57C7.49504 17.57 6.59961 18.4654 6.59961 19.57C6.59961 20.6746 7.49504 21.57 8.59961 21.57Z"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                            d="M2 3.55997C2 3.55997 6.64 3.49997 6 7.55997L5.31006 11.62C5.20774 12.1068 5.21778 12.6105 5.33954 13.0929C5.46129 13.5752 5.69152 14.0234 6.01263 14.4034C6.33375 14.7833 6.73733 15.0849 7.19263 15.2854C7.64793 15.4858 8.14294 15.5797 8.64001 15.56H16.64C17.7479 15.5271 18.8119 15.1196 19.6583 14.404C20.5046 13.6884 21.0834 12.7069 21.3 11.62L21.9901 7.50998C22.0993 7.0177 22.0939 6.50689 21.9744 6.017C21.8548 5.52712 21.6242 5.07126 21.3005 4.68467C20.9767 4.29807 20.5684 3.99107 20.1071 3.78739C19.6458 3.58371 19.1438 3.48881 18.64 3.50998H9.94"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* <!-- Description and details --> */}
                        <div>
                            <h3>Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-slate-100">
                                    {selectedProduct.description}
                                </p>
                            </div>
                        </div>

                        {/* <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Highlights
                                        </h3>

                                        <div className="mt-4">
                                            <ul
                                                role="list"
                                                className="list-disc space-y-2 pl-4 text-sm"
                                            >
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        Hand cut and sewn
                                                        locally
                                                    </span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        Dyed with our
                                                        proprietary colors
                                                    </span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        Pre-washed &amp;
                                                        pre-shrunk
                                                    </span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        Ultra-soft 100% cotton
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-900">
                                            Details
                                        </h2>

                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">
                                                The 6-Pack includes two black,
                                                two white, and two heather gray
                                                Basic Tees. Sign up for our
                                                subscription service and be the
                                                first to get new, exciting
                                                colors, like our upcoming
                                                &quot;Charcoal Gray&quot;
                                                limited release.
                                            </p>
                                        </div>
                                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
