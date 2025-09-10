import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Author = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 sm:px-16 xl:px-32 relative bg-[url(./gradientBackground.png)] bg-cover bg-no-repeat min-h-screen py-24">
      <div className="max-w-5xl mx-auto">
       
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          <div className="flex-shrink-0">
            <img
              src="/public/nasir.jpeg"
              alt="Nasir Hussain"
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl object-cover shadow-lg"
            />
          </div>

         
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Nasir Hussain
            </h1>
            <p className="mt-3 text-gray-700 max-w-lg leading-relaxed">
              Hi, I’m Nasir  — the maker of{" "}
              <span className="font-semibold text-primary">AI.Station</span>.  
              I built this platform to make content creation effortless and fun, 
              blending technology and creativity into tools that actually save time.  
            </p>

            
            <div className="flex justify-center md:justify-start gap-5 mt-6 text-gray-600">
              <a
                href="mailto:nasirhuss86@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nasirhuss86"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nasirhussain86"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-16 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a developer, problem-solver, and builder at heart. With
            experience in full-stack development, AI integrations, and
            hackathons, I love creating tools that are simple, powerful, and
            enjoyable to use.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond coding, I enjoy solving problems on LeetCode, mentoring peers,
            and participating in hackathons where I’ve been fortunate to earn
            recognition. I believe in continuous learning and building tools that
            make people’s lives easier.
          </p>
        </div>

        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            Let’s build the future together 
          </h3>
          <p className="text-gray-500 mt-2">
            Have an idea or just want to connect? Reach out and let’s talk.
          </p>

         
          <button
            onClick={() => navigate("/")}
            className="mt-8 bg-primary text-white px-6 py-2 rounded-lg shadow hover:scale-105 active:scale-95 transition-transform"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Author;