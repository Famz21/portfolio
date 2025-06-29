import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

// Helper function to format duration like LinkedIn (e.g., "3 mos", "1 yr 5 mos")
const formatDuration = (duration: string) => {
  // Handle "Present" case
  if (duration.includes("Present")) {
    const startDate = duration.split("-")[0];
    return `${startDate} - Present`;
  }
  
  // Parse start and end dates
  const [startStr, endStr] = duration.split("-");
  const startParts = startStr.split("/");
  const endParts = endStr.split("/");
  
  // Convert to Date objects
  const startMonth = parseInt(startParts[0]);
  const startYear = parseInt(startParts[1]);
  const endMonth = parseInt(endParts[0]);
  const endYear = parseInt(endParts[1]);
  
  // Calculate total months
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // +1 to include both start and end months
  
  // Format as years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years > 0 && months > 0) {
    return `${years} yr ${months} mos`;
  } else if (years > 0) {
    return `${years} yr`;
  } else {
    return `${months} mos`;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Work Experiences</span>
      </h1>

      {/* Use flexbox to stack cards vertically */}
      <div className="w-full mt-12 flex flex-col gap-10">
        {workExperience.map((company) => (
          <Button
            key={company.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              // Reduce opacity for past experiences
              opacity: company.company === "DataU Academy" ? 0.8 : 1,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="p-6 md:p-8 lg:p-10">
              {/* Company header */}
              <div className="flex lg:flex-row flex-col lg:items-start gap-4 mb-6">
                <img
                  src={company.thumbnail}
                  alt={`${company.company} logo`}
                  className="lg:w-32 md:w-24 w-20"
                />
                <div className="w-full">
                  {/* For non-promotion roles, show title first and larger */}
                  {!('roles' in company) && company.title ? (
                    <>
                      <h1 className="text-start text-2xl md:text-3xl font-bold">
                        {company.title}
                      </h1>
                      <h2 className="text-start text-lg md:text-xl font-semibold mt-1 text-gray-200">
                        {company.company}
                      </h2>
                    </>
                  ) : (
                    <h1 className="text-start text-2xl md:text-3xl font-bold">
                      {company.company}
                    </h1>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p className="text-start text-gray-300 font-semibold">
                      {company.companyDuration}
                      <span className="ml-2 text-gray-400">
                        · {formatDuration(company.companyDuration)}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {company.workType && (
                      <p className="text-start text-gray-400 font-medium">
                        {company.workType}
                      </p>
                    )}
                    {company.location && (
                      <p className="text-start text-gray-400 font-medium">
                        {company.workType ? ` · ${company.location}` : company.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Role timeline */}
              {'roles' in company && company.roles && company.roles.length > 0 ? (
                <div className="mt-6 pl-4 border-l-2 border-purple-800">
                  {company.roles.map((role, index) => (
                    <div key={index} className="mb-8 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-purple-600 border-2 border-purple-800"></div>
                      
                      <div className="pl-4 flex flex-col items-start w-full">
                        <h2 className="text-xl font-bold">{role.title}</h2>
                        <p className="text-gray-300 font-medium mt-1">
                          {role.duration}
                          <span className="ml-2 text-gray-400">
                            · {formatDuration(role.duration)}
                          </span>
                        </p>
                        <p className="text-gray-300 mt-3 text-left">{role.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-start text-gray-300 font-semibold">
                    {company.desc}
                  </p>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
