"use client";

import { FaCertificate } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const Licenses = () => {
  const licensesData = [
    {
      id: 1,
      title: "AI Engineering Bootcamp",
      issuer: "Maven - AI Makerspace",
      description:
        "Specialized in Prompt Engineering, RAG, Fine-Tuning, and Multi-Agent Systems.",
      logo: "/Maven_AI.webp", // Replace with the path to Maven logo
      link: "https://maven.com/certificate/cDyIZmnh", // Add the link for this license
    },
    {
      id: 2,
      title:
        "Machine Learning with Python - From Linear Models to Deep Learning",
      issuer: "MITx MicroMasters",
      description:
        "Advanced course covering linear models, deep learning, and machine learning techniques using Python.",
      logo: "/MITx 6.86x - Certificate.png", // Replace with the path to MITx logo
      link: "https://courses.edx.org/certificates/43736bb627fb4928a38fab9225515a41", // Add the link for this license
    },
    {
      id: 3,
      title: "IBM AI Engineering",
      issuer: "IBM",
      description:
        "Comprehensive program in deep learning, computer vision, NLP and LLM.",
      logo: "/IBM_AI.png", // Replace with the path to Maven logo
      link: "https://www.credly.com/badges/2e690524-cb52-468d-8ef1-1d38a369a871", // Add the link for this license
    },
    {
      id: 4,
      title: "Data Specialist Trainee",
      issuer: "DataU Academy",
      description:
        "Intensive Program in Data Science, Power BI, Data Warehousing.",
      logo: "/DataU.png", // Replace with the path to Maven logo
      link: "https://drive.google.com/file/d/1hIr4rAk0on6Sr2_Ob_jny3Q6h9ls-2Kj/view", // Add the link for this license
    },
    // Add more entries as needed
  ];

  return (
    <section id="licenses" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Licenses & Certifications</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {licensesData.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.issuer}>
              <a
                href={item.link} // Use the link from the license data
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
                className="w-full h-full"
              >
                {/* Image Container */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    {/* Background Image */}
                    <img
                      src="/bg.png"
                      alt="bgimg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Issuer Logo */}
                  <img
                    src={item.logo}
                    alt="issuer-logo"
                    className="z-10 absolute inset-0 w-full h-full object-contain object-center"
                  />
                </div>

                {/* License Details */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.description}
                </p>

                {/* Certificate Icon and Issuer */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                      <FaCertificate className="p-2" color="#CBACF9" />
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.issuer}
                    </p>
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Licenses;
