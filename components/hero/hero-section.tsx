"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "MCA Student",
  "Aspiring Software Developer", 
  "ML Enthusiast",
  "Full-Stack Developer"
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      
      <motion.div 
        className="container mx-auto px-4 text-center z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        suppressHydrationWarning
      >
        {/* Greeting */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
            👋 Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent"
        >
          Rohan Gautam
        </motion.h1>

        {/* Animated Role */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 min-h-[3rem] flex items-center justify-center">
            {isClient && (
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            )}
            {!isClient && (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MCA Student
              </span>
            )}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Turning ideas into impactful digital solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDownIcon size={20} className="mr-2" />
            Explore My Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
