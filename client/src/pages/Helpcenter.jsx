import React from "react";
import { useNavigate } from "react-router-dom";

const Helpcenter = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center text-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
        Help Center
      </h1>

      <p className="mt-4 text-gray-600 max-w-md">
        We’re working hard to bring you this feature. 
        The Help Center will be available soon!
      </p>

      <p className="mt-6 text-sm text-gray-400">
        In the meantime, feel free to explore our other tools.
      </p>

     
      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-primary text-white px-6 py-2 rounded-lg shadow hover:scale-105 active:scale-95 transition-transform"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Helpcenter;