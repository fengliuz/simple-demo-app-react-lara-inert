import { Link, useForm } from "@inertiajs/react";
import Navbar from "../Components/Navbar";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: "",
        username: "",
        email: "",
        password: "",
    });

    function handleRegister(e) {
        e.preventDefault();
        post("/register");
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
                <div className="bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-lg text-white">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block mb-1 text-slate-200">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={data.full_name}
                                onChange={(e) => setData("full_name", e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                            />
                            {errors.full_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="username" className="block mb-1 text-slate-200">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={data.username}
                                onChange={(e) => setData("username", e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-slate-200">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                autoComplete="off"
                                onChange={(e) => setData("email", e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 text-slate-200">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            {processing ? "Loading..." : "Register"}
                        </button>
                    </form>

                    <h4 className="text-center text-sm mt-6">
                        Already have an account?{" "}
                        <Link
                            className="text-blue-400 hover:underline"
                            href="/login"
                        >
                            Login
                        </Link>
                    </h4>
                </div>
            </div>
        </>
    );
}
