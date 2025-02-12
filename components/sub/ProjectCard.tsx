"use client";
import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const handleVisitProject = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] block cursor-pointer transition-transform hover:scale-105 z-10">
      {/* Image */}
      <div className="w-full h-[250px] relative">
        <Image
          src={src}
          alt={title}
          width={500}
          height={300}
          className="w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="relative p-4 bg-gray-900">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Visit Project Button */}
        <button
          onClick={handleVisitProject}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Visit Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;