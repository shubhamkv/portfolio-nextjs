"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export const About = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 pt-35 px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-br from-orange-50  to-red-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Left - Description */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left max-w-2xl space-y-6 lg:space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white">
          Know Who <span className="text-cyan-600 dark:text-cyan-400">I'M</span>
        </h2>
        <p className="text-lg font-mono sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi Everyone, I&apos;m{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            Shubham Kumar{" "}
          </span>
          from{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            India.
          </span>
          <br />I have completed my undergraduate (B.TECH) from BIT Mesra in
          Computer Science and Engineering.
          <br />
          <br />
          Some of the highlights of my programming journey are:
        </p>
        <br />
        <ul>
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              I primarily code in{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                TypeScript
              </strong>
              , but I&apos;m also skilled in{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                JavaScript, Java, C++, and SQL
              </strong>
              .
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              For frontend development, I use{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Next.js, React, Tailwind CSS, Vite
              </strong>{" "}
              and{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Shadcn UI
              </strong>{" "}
              to build fast and responsive interfaces.
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              On the backend, I work with{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Node.js, Express, and Prisma ORM,
              </strong>{" "}
              often validating data with{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">Zod</strong>{" "}
              and securing APIs with{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">JWT</strong>.
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              I manage data with{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                MongoDB, PostgreSQL, MySQL
              </strong>{" "}
              and use{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Redis
              </strong>{" "}
              for caching and session management.
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              My daily toolkit includes{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Git, GitHub, VS Code
              </strong>{" "}
              and{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                Postman
              </strong>{" "}
              for collaboration and debugging.
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              I enjoy building{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                {" "}
                scalable web apps,
              </strong>{" "}
              writing{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                clean code
              </strong>{" "}
              and solving{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                real-world problems
              </strong>{" "}
              through{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                full-stack development
              </strong>
              .
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              Currently, I&apos;m diving deeper into{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                {" "}
                backend communication patterns, cloud technologies
              </strong>{" "}
              and{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                microservices architecture
              </strong>
              .
            </span>
          </li>
          <br />
          <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl font-mono text-gray-700 dark:text-gray-300">
            <FaStar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-1" />
            <span className="leading-relaxed">
              I&apos;m open to exciting{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                {" "}
                opportunities
              </strong>{" "}
              where I can{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                contribute, grow
              </strong>{" "}
              and{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                build impactful software
              </strong>
              .
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
        className="relative group flex-shrink-0"
      >
        <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 shadow-2xl">
          <div className="rounded-2xl overflow-hidden w-48 h-56 xs:w-52 xs:h-60 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[28rem] bg-white dark:bg-gray-900 transition-all duration-300">
            <Image
              src="/portfolio-about.jpg"
              alt="Shubham Kumar"
              width={384}
              height={448}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority
              sizes="(max-width: 480px) 192px, (max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
            />
          </div>

          {/* Animated glow - Made persistent */}
          <div className="absolute -inset-2 rounded-2xl blur-xl opacity-60 group-hover:opacity-70 transition-all duration-500 bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 animate-pulse z-[-1]" />
        </div>
      </motion.div>
    </section>
  );
};
