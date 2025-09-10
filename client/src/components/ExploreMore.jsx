import React from "react";
import { useNavigate } from "react-router-dom";

const ExploreMore = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20 px-6 bg-white">
     
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
        Explore More About Us
      </h2>

      
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
        “AI isn’t here to replace creativity — it’s here to supercharge it.  
        At <span className="font-semibold text-primary">AI.Station</span>, we believe the future belongs to those who 
        blend imagination with intelligent tools.”
      </p>

      
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/about")}
          className="bg-primary text-white px-8 cursor-pointer py-3 rounded-full shadow hover:scale-105 active:scale-95 transition"
        >
          About Us
        </button>

        <button
          onClick={() => navigate("/author")}
          className="bg-white border border-primary cursor-pointer text-primary px-8 py-3 rounded-full shadow hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition"
        >
          Author
        </button>
      </div>
    </div>
  );
};

export default ExploreMore;