"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Type from "./Type";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-0 bg-gradient-to-br from-orange-50  to-red-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      {/* Left Section - Content */}
      <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 max-w-2xl order-2 lg:order-1">
        {/* Main Content */}
        <div className="text-center lg:text-left space-y-4 lg:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-white text-gray-900 leading-tight font-serif">
            Hi there, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-orange-500 bg-clip-text text-transparent">
              Shubham Kumar
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium font-mono dark:text-cyan-300 text-cyan-700 min-h-[2.5rem]">
            <Type />
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-serif">
            Passionate about writing clean code, optimizing performance and
            building scalable web applications.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-2 font-mono">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
            onClick={() => router.push("/projects")}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </motion.button>
        </div>

        {/* Freelance Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center mt-5 gap-3 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-700/50 w-fit mx-auto lg:mx-0"
        >
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-sm font-medium font-serif text-gray-800 dark:text-gray-200">
            Available for Freelance
          </span>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
        className="relative group order-1 lg:order-2"
      >
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-2xl">
          <div className="rounded-full overflow-hidden w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-white dark:bg-gray-900 transition-all duration-300">
            <Image
              src="/me.jpg"
              alt="Shubham Kumar"
              width={288}
              height={288}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
          {/* Animated Glow Effect */}
          <div className="absolute -inset-2 rounded-full blur-xl opacity-60 group-hover:opacity-70 transition-all duration-500 bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-500 animate-pulse z-[-1]" />

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 blur-sm"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-70 blur-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};
