"use client";

import { FaGraduationCap } from "react-icons/fa6";
import { Button } from "./ui/MovingBorders"; // Use the same Button component as Experience

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Institute of Technology of Cambodia",
      degree: "Bachelor of Engineering (BEng), Data Science",
      year: "2021 - 2025", // Update with your actual years
      description:
        "Specialized in data analysis, machine learning, and applied mathematics.",
      logo: "/ITC logo.png", // Replace with the path to your ITC logo
    },
    // Add more education entries if needed
  ];

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      {/* Use the same grid layout as Experience */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {educationData.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* Institution Logo */}
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="lg:w-32 md:w-20 w-16"
              />

              {/* Education Details */}
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {item.degree}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {item.institution}
                </p>
                <p className="text-start text-gray-300 mt-2 font-semibold">
                  {item.year}
                </p>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {item.description}
                </p>

                {/* Graduation Cap Icon */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                      <FaGraduationCap className="p-2" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
