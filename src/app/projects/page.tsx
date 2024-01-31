"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./components/project";
import { useSectionInView } from "@/lib/hooks";
import NavigationButton from "@/components/NavigationButton";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mx-auto scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <NavigationButton text="View Skills" href="Skills" />
    </section>
  );
}
