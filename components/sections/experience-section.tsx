"use client";

import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon, ExternalLinkIcon, BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const experiences = [
  {
    role: "Software Developer Intern",
    company: "MECON Limited",
    location: "Ranchi, India",
    duration: "April 2025 - May 2025",
    type: "Internship",
    description: "Developed an intelligent chatbot system using cutting-edge AI technologies to enhance user interaction and support.",
    technologies: ["LLaMA 3.2", "ReactJS", "TailwindCSS", "FastAPI", "MySQL", "ChromaDB", "RAG"],
    achievements: [
      "Developed and deployed Nexora AI, a full-stack intelligent chatbot platform using ReactJS, TailwindCSS, FastAPI, MySQL, and ChromaDB.",
      "Integrated LLaMA 3.2 (via Ollama) with Retrieval-Augmented Generation (RAG) to enable context-aware and session-based conversations with persistent chat history.",
      "Delivered a production-ready solution adopted by MECON, streamlining internal query handling and improving employee productivity."
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "💼"
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building real-world solutions and gaining practical experience in software development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 shadow-lg" />
                  
                  {/* Content */}
                  <div className="md:flex md:items-center">
                    <motion.div 
                      className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 bg-gradient-to-r ${exp.color} rounded-lg`}>
                              <BriefcaseIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                {exp.role}
                              </h3>
                              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <CalendarIcon size={16} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPinIcon size={16} />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline"
                              className="text-xs font-medium border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                            <span className="text-lg">🏆</span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li 
                                key={achIndex}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                              >
                                <span className="text-green-500 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Experience Note */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center justify-center gap-2">
                <span className="text-3xl">🚀</span>
                Looking for New Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                I&apos;m actively seeking internship and full-time opportunities where I can contribute 
                my skills in software development, machine learning, and AI while continuing to learn 
                and grow in a collaborative environment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
