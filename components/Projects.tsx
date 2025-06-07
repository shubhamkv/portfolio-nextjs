"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiRedis,
} from "react-icons/si";
import { JSX } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: { name: string; icon: JSX.Element }[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "TrackZen",
    description:
      "A Full-stack productivity app powered by a Chrome Extension that tracks website activity and visualizes insights through a beautiful dashboard.",
    image: "/trackzen-hero.png",
    tech: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    github: "https://github.com/shubhamkv/trackzen",
    live: "https://trackzen.netlify.app",
  },
  {
    title: "Task Wave",
    description:
      "A Productivity app for task management, focus tracking, and performance insights.",
    image: "/taskwave.png",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    github: "https://github.com/shubhamkv/task-wave",
    live: "https://task-wavee.netlify.app",
  },
  {
    title: "Portfolio",
    description:
      "A modern and fully responsive portfolio website built with Next.js, TypeScript and Tailwind CSS.",
    image: "/portfolio.png",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    github: "https://github.com/shubhamKv/portfolio-nextjs",
    live: "https://portfolio.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full pt-16 sm:pt-20 lg:pt-25 px-4 sm:px-6 lg:px-20 xl:px-28 py-12 lg:py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-center mb-6 sm:mb-8 lg:mb-12 text-gray-900 dark:text-slate-100"
      >
        My Recent{" "}
        <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Works
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-mono text-center mb-8 sm:mb-12 lg:mb-16 text-gray-700 dark:text-slate-300"
      >
        Here are few projects that I&apos;ve worked on recently
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-slate-700/50 hover:border-cyan-300 dark:hover:border-cyan-500"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image Container */}
            <div className="relative w-full h-48 sm:h-52 md:h-48 lg:h-52 overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                priority={index < 2}
              />
            </div>

            {/* Content */}
            <div className="relative p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-gray-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-mono">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-full bg-gradient-to-r from-cyan-50 via-indigo-50 to-purple-50 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 text-gray-700 dark:text-slate-200 border border-cyan-200/50 dark:border-slate-600 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400">
                      {tech.icon}
                    </span>
                    <span className="font-medium font-mono">{tech.name}</span>
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 sm:pt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 text-gray-600 dark:text-slate-300 hover:from-cyan-500 hover:to-indigo-500 hover:text-white dark:hover:from-cyan-500 dark:hover:to-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaGithub size={18} />
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <FaExternalLinkAlt size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
