"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useAuth(); 

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      console.log("Login Response:", res);

      if (res.success) {
        toast.success(res.message);
        router.push("/"); 
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-2">
          Don't have an account?{" "}
          <a
            href="/customer/signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </a>
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}
