import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      image: "/yasir.png",
      name: "Yasir Aquil",
      title: "Content Creator, Freelance",
      content:
        "Before AI.Station: sleepless nights, endless drafts. After AI.Station: Netflix, chill, and content DONE. Honestly, it feels like cheating—but the legal kind 😉",
      rating: 4,
    },
    {
      image: "/ovais.jpeg",
      name: "Ovais Rajput",
      title: "Developer, TechCorp",
      content:
        "AI.Station has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://e7.pngegg.com/pngimages/546/188/png-clipart-nahendra-modi-narendra-modi-indian-national-congress-bharatiya-janata-party-narendra-modi-people-india-thumbnail.png",
      name: "Narendra Modi",
      title: "Prime Minister, India",
      content:
        "India’s digital future is powered by innovation. With AI.Station, what once took days now happens in minutes—and with a sharp edge. If you want to lead, not follow, there’s no better tool.",
      rating: 5,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-16 min-h-screen bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat">
     
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-700 mb-6">
          About <span className="text-primary">AI.Station</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Revolutionizing content creation with cutting-edge AI technology. We
          make professional content creation effortless, fast, and fun.
        </p>
      </div>

      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-slate-700 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At AI.Station, our mission is simple: to empower creators. We’re
          building AI-driven tools that save time, amplify creativity, and let
          you focus on what matters most — ideas. Technology shouldn’t replace
          creativity, it should **supercharge it**.
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
            ⚡
          </div>
          <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
          <p className="text-gray-600">
            Generate professional content in seconds, not hours.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
            🎯
          </div>
          <h3 className="text-xl font-semibold mb-3">Precision Quality</h3>
          <p className="text-gray-600">
            Every output is fine-tuned for professional-grade results.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl">
            🚀
          </div>
          <h3 className="text-xl font-semibold mb-3">Scales With You</h3>
          <p className="text-gray-600">
            From solo creators to teams, AI.Station grows with your needs.
          </p>
        </div>
      </div>

      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-slate-700">
          See What Others Say
        </h2>
        <p className="mt-3 text-gray-500">
          Real stories from creators, developers, and leaders using AI.Station.
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <img
                    key={idx}
                    src={
                      idx < t.rating ? assets.star_icon : assets.star_dull_icon
                    }
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>
            <p className="text-gray-500 text-sm my-5">"{t.content}"</p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="text-sm text-gray-600">
                <h3 className="font-medium">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
       
        <button
          onClick={() => navigate("/")}
          className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full shadow hover:scale-105 active:scale-95 transition"
        >
          Go Back Home
        </button>

       
        <button
          onClick={() => navigate("/author")}
          className="border cursor-pointer border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 hover:scale-105 active:scale-95 transition"
        >
          Meet the Author
        </button>
      </div>
    </div>
  );
};

export default About;
