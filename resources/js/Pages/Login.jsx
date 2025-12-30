import { Link, useForm } from "@inertiajs/react";
import Navbar from "../Components/Navbar";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        password: "",
    });

    function handleLogin(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
                <div className="bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-lg text-white">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
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
                            />
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
                        </div>
                        {errors?.auth && (
                            <p className="text-red-500 text-sm">{errors.auth}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            {processing ? "Loading..." : "Login"}
                        </button>
                    </form>
                    <h4 className="text-center text-sm mt-6">
                        Don’t have an account?{" "}
                        <Link
                            className="text-blue-400 hover:underline"
                            href="/register"
                        >
                            Register
                        </Link>
                    </h4>
                </div>
            </div>
        </>
    );
}
