import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Testi = () => {
  const navigate = useNavigate();

  const dummyTestimonialData = [
    {
      image: "/yasir.png",
      name: "Yasir Aquil ",
      title: "Content Creator, Freelance",
      content:
        "Before AI.Station: sleepless nights, endless drafts. After AI.Station: Netflix, chill, and content DONE. Honestly, it feels like cheating—but the legal kind 😉",
      rating: 4,
    },
    {
      image: "/ovais.jpeg",
      name: "Ovais Rajput",
      title: "Developer, BrainyTech",
      content:
        "AI.Station has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image: "https://e7.pngegg.com/pngimages/546/188/png-clipart-nahendra-modi-narendra-modi-indian-national-congress-bharatiya-janata-party-narendra-modi-people-india-thumbnail.png",
      name: "Narendra Modi",
      title: "Prime Minister, India",
      content:
        "India’s digital future is powered by innovation. With AI.Station, what once took days now happens in minutes—and with a sharp edge. If you want to lead, not follow, there’s no better tool.",
      rating: 5,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 min-h-screen bg-[url(./gradientBackground.png)] bg-cover bg-no-repeat">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Real Voices. Real Impact.
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Behind every line of code is a story. At{" "}
          <span className="text-primary font-semibold">AI.Station</span>, our
          mission is to give creators, developers, and innovators tools that
          feel like superpowers. But don’t just take it from us—hear it from the
          people building the future with AI. 
        </p>
      </div>

     
      <div className="flex flex-wrap mt-10 justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
           
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="w-4 h-4"
                    alt="star"
                  />
                ))}
            </div>

           
            <p className="text-gray-500 text-sm my-5">
              "{testimonial.content}"
            </p>
            <hr className="mb-5 border-gray-300" />

         
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full"
                alt={testimonial.name}
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-xs text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-8 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Testi;