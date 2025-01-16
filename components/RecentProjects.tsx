"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 w-full">
      <h1 className="heading">
        Recent <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title="Visit">
              <a
                href={item.link} // Use the link from the project data
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
                  {/* Project Image */}
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute inset-0 w-full h-full object-contain object-center"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mb-4"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>

                {/* Icons and "Check Live Site" Button */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
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

export default RecentProjects;
