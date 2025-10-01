"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";

export default function SignupPage() {
  const router = useRouter();
  const { signup, loading, error } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(formData).unwrap();
      toast.success(res.message || "Account created successfully");
      router.push("/customer/login");
    } catch (err) {
      toast.error(err?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full mb-3 p-2 border rounded"/>
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full mb-3 p-2 border rounded"/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full mb-3 p-2 border rounded"/>
        <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="w-full mb-3 p-2 border rounded"/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full mb-3 p-2 border rounded"/>

        <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
         <p className="text-center text-sm text-gray-600 mt-2">
           Already have an account? <a href="/customer/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
        
      </form>
    </div>
  );
}
