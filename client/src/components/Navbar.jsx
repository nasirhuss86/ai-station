import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LayoutDashboard, LayoutDashboardIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-10 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44"
        onClick={() => navigate("/")}
      />

     
      <div className="flex items-center gap-4">
        {user ? (
          <>
            
            <button
              onClick={() => navigate("/ai")}
              className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-gray-300 px-3 py-2 hover:scale-105 active:scale-95 transition"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>

            
            <UserButton />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;