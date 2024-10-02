"use client"

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Left Panel */}
      <div className="md:w-1/2 h-1/2 md:h-full text-white p-4 sm:p-6 lg:p-10 flex flex-col justify-center" style={{background:"#167177"}}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8">Welcome!</h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 lg:mb-6">Key Advantages:</h2>
        <ul className="space-y-1 sm:space-y-2 lg:space-y-4 text-sm sm:text-base lg:text-md">
          {[
            'Complaint facts panels for food, beverages and dietary supplements under 21 CFR part 101',
            'Common or usual name and latin binomial ingredient lookup.',
            'Rules based adherence to rounding, declarations, content claims, warnings, allergens, etc.',
            'Proactive regulatory suggestions and/or considerations',
            'Multi-format, single or multi-DV, single or multi-serving, print-ready, editable artwork files.',
            'User-friendly, intuitive, single user or team management solutions.'
          ].map((advantage, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-base sm:text-lg lg:text-xl">✦</span> {advantage}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 h-1/2 md:h-full bg-white flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black">Welcome Back! 👋</h1>
          <p className="text-xs sm:text-sm lg:text-base mb-4 lg:mb-6 text-black">Sign in to access the dashboard.</p>
          <form>
            <div className="mb-3 lg:mb-4">
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3 lg:mb-4">
              <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="mt-1 block w-full px-2 pr-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-black"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 pl-2 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-right mb-3 lg:mb-4">
              <a href="#" className="text-xs sm:text-sm text-teal-600 hover:underline font-bold" style={{color:"#167177"}}>Forget Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-1 sm:py-2 px-2 sm:px-4 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500" style={{background:"#167177"}}
            >
              Log in
            </button>
          </form>
          <p className="mt-3 lg:mt-4 text-center text-xs sm:text-sm text-black">
            Don't have an account yet?{' '}
            <a href="#" className="text-teal-600 hover:underline font-bold" style={{color:"#167177"}}>Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
}
