"use client"; // Required for animations

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-10 lg:px-20 mt-20 w-full z-[20] min-h-screen bg-gray-900 text-white"
    >
      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">

        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-5 text-start">
          {/* Header with Icon */}
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">About the Developer</h1>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-5xl md:text-6xl font-bold"
          >
            Passionate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Developer Description */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400"
          >
            With a strong background in <strong>Full Stack Development</strong>, I specialize in <strong>building web and mobile applications</strong> using modern technologies. From crafting <strong>responsive UIs</strong> to designing <strong>scalable backends</strong>, I bring ideas to life with <strong>clean, efficient, and maintainable code</strong>. I graduated from <strong>NAIT's Digital Media and Information Technology (DMIT) program</strong>, where I honed my skills in software development, working on diverse projects that showcase my expertise.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(1)}
            className="text-lg text-gray-400"
          >
            My expertise includes <strong>React, Next.js, Laravel, Java, Flutter, and Python</strong>, with a focus on <strong>performance, accessibility, and user experience</strong>. I love solving <strong>complex problems</strong> and continuously learning new technologies to stay ahead in the ever-evolving world of software development.
          </motion.p>
        </div>

        {/* Right Side: Developer Image (Moves on Top for Mobile) */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center"
        >
          <Image
            src="/me.png" // Replace with actual image
            alt="Developer Image"
            height={500}
            width={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded"
          />
        </motion.div>
      </div>

      {/* Passion for Sports and Hobbies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-6xl mt-20">

        {/* Left Side: Image (Moves on Top for Mobile) */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center lg:order-last"
        >
          <Image
            src="/interests.png" // Replace with actual image
            alt="Sports and Hobbies"
            height={200}
            width={200}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-2 rounded"
          />
        </motion.div>

        {/* Right Side: Hobbies Content */}
        <div className="flex flex-col gap-5 text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#ff5733b3] opacity-[0.9] flex items-center"
          >
            <SparklesIcon className="text-[#ff8b60] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Beyond Coding</h1>
          </motion.div>

          {/* Hobbies Section */}
          <motion.p
            variants={slideInFromLeft(1)}
            className="text-lg text-gray-400"
          >
            Beyond coding, I&apos;m deeply passionate about <strong>sports and fitness</strong>. I love <strong>basketball, soccer, and UFC</strong>, always keeping up with the latest matches and fights. Whether it&apos;s shooting hoops, playing a competitive soccer match, or analyzing UFC bouts, sports keep me energized and motivated.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(1.2)}
            className="text-lg text-gray-400"
          >
            When I’m not coding or watching sports, you’ll find me <strong>at the gym, weightlifting and pushing my limits</strong>. Strength training is more than just fitness—it’s a mindset of discipline and perseverance.
          </motion.p>

          <motion.p
            variants={slideInFromLeft(1.4)}
            className="text-lg text-gray-400"
          >
            I also have a passion for <strong>motorcycles and reading</strong>. The thrill of the open road on two wheels and the wisdom gained from books are both adventures that fuel my creativity and drive.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
