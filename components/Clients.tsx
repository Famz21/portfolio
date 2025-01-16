"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-12">
        {" "}
        {/* Added margin-bottom */}
        Technologies
        <span className="text-purple"> Stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center gap-4">
              <img
                src={company.img}
                alt={company.name}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <p className="text-sm md:text-base font-medium text-white">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
