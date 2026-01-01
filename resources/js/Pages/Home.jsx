import Navbar from "../Components/Navbar";
import { Link, usePage } from "@inertiajs/react";

export default function Home() {
    const { auth } = usePage().props;

    console.log(auth.user);
    return (
        <>
            <Navbar></Navbar>
            <div className=" h-[125%] relative overflow-hidden bg-slate-800">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
                                Flex<span className=" text-yellow-600">era</span> Camera Shop
                            </h1>
                            <p className="mt-4 text-xl text-gray-300">
                                This ocassion, make you never leaves our shop
                                cause we will shelter you from the harsh
                                elements of a world that doesn't care if you
                                live or die.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 animate-float two w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="/storage/products/one.jpg"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 three animate-float w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="/storage/products/two.webp"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 one animate-float one w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="/storage/products/three.webp"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 two animate-float w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="/storage/products/four.webp"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 three animate-float w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="/storage/products/one.jpg"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 one animate-float w-44 overflow-hidden rounded-lg">
                                                     <img
                                                        src="/storage/products/one.jpg"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                                <div className="h-64 opacity-95 drop-shadow-2xl drop-shadow-indigo-950 hover:scale-200 animate-float w-44 overflow-hidden two rounded-lg">
                                                    <img
                                                        src="/storage/products/one.jpg"
                                                        alt=""
                                                        className="size-fit object-contain rounded-4xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/products"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Shop Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
