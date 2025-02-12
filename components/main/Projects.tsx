import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import StarsCanvas from './StarBackground';

const Projects = ({ id }: { id: string }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 gap-10">
      {/* Starry Background */}
      <StarsCanvas />

      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Project List */}
      <div id={id} className="flex flex-col md:flex-row gap-10 px-10 z-10">
        <ProjectCard
          src="/calculatorapp.png"
          title="Calculator Next.js Webapp"
          description="Basic calculator with a gradient background"
          link="https://calculator-app-tan-nine.vercel.app/"
        />
        <ProjectCard
          src="/weatherapp.png"
          title="Weather Next.js Webapp"
          description="Weather app fetching data via API"
          link="https://weather-app-five-mu-63.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;