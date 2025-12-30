import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props; // ambil user login

    const handleLogout = (e) => {
        e.preventDefault();
        router.post("/logout", {}, { onSuccess: () => window.location.reload() });
    };

    return (
        <header className="flex">
            <nav className="bg-slate-950 text-white fixed w-full z-20 top-0 start-0">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <p className="hover:text-yellow-600 transition duration-500 text-center text-xl font-semibold whitespace-nowrap">
                            <span>Flex</span>
                            <span className="text-slate-300 hover:text-white">Era</span>
                        </p>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </button>

                    {/* Menu items */}
                    <div
                        className={`${
                            isOpen ? "translate-x-0 bg-slate-950" : "translate-x-full bg-slate-950"
                        } w-1/4 duration-200 transition-transform absolute right-0 top-15 rounded-2xl text-white md:block md:w-auto md:static md:right-20 md:translate-x-0`}
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0">
                            {auth.user ? (
                                <>
                                    <li>
                                        <Link
                                            href="/"
                                            className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:text-indigo-400 transition duration-100"
                                        >
                                            {auth.user.full_name}
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 hover:text-red-400 transition duration-100"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href="/login"
                                            className="block py-2 px-3 text-white rounded hover:text-indigo-400 transition duration-100"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/register"
                                            className="block py-2 px-3 text-white rounded hover:text-indigo-400 transition duration-100"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
