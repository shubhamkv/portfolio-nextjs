"use client";

import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiZod,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <DiJava />, name: "Java" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiMysql />, name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiZod />, name: "Zod" },
      { icon: <SiJsonwebtokens />, name: "JWT" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },

      { icon: <SiPostman />, name: "Postman" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full pt-25 px-4 py-12 bg-gradient-to-br from-orange-50 to-red-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 dark:text-slate-100 mb-10">
          My Tech{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Stack</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2
                   dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-700/50 dark:border-slate-600 dark:hover:border-cyan-400 dark:hover:shadow-2xl dark:hover:shadow-cyan-500/20
                    bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-cyan-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transform transition-transform duration-300">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700/70 rounded-xl p-4 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-500 hover:text-white dark:hover:from-cyan-500 dark:hover:to-blue-500 dark:text-slate-200 transition-all"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium font-mono text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
