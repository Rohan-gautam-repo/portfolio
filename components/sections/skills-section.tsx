"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CodeIcon, 
  BrainIcon, 
  DatabaseIcon, 
  PaletteIcon,
  UsersIcon,
  LightbulbIcon,
  TrendingUpIcon,
  ShuffleIcon
} from "lucide-react";

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

const technicalSkills = [
  { name: "Python", level: 90, icon: "🐍", color: "from-yellow-400 to-green-500" },
  { name: "JavaScript", level: 85, icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { name: "Java", level: 80, icon: "☕", color: "from-red-500 to-orange-600" },
  { name: "React.js", level: 85, icon: "⚛️", color: "from-blue-400 to-cyan-500" },
  { name: "Next.js", level: 82, icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Machine Learning", level: 88, icon: "🤖", color: "from-purple-500 to-pink-500" },
  { name: "Deep Learning", level: 85, icon: "🧠", color: "from-indigo-500 to-purple-600" },
  { name: "MongoDB", level: 78, icon: "🍃", color: "from-green-500 to-emerald-600" },
  { name: "MySQL", level: 82, icon: "🗄️", color: "from-blue-600 to-blue-800" },
  { name: "Firebase", level: 80, icon: "🔥", color: "from-orange-500 to-red-600" }
];

const softSkills = [
  { name: "Problem-solving", icon: LightbulbIcon, description: "Analytical thinking and creative solutions" },
  { name: "Leadership", icon: TrendingUpIcon, description: "Leading teams and driving projects forward" },
  { name: "Teamwork", icon: UsersIcon, description: "Collaborative approach to achieve common goals" },
  { name: "Adaptability", icon: ShuffleIcon, description: "Quick learning and adapting to new technologies" }
];

const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Constantly learning and evolving with the latest technologies to build innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <CodeIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Technical Skills
                </h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                  <BrainIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Soft Skills
                </h3>
              </div>
              
              <div className="grid gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Currently Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced Deep Learning techniques, Computer Vision with OpenCV, 
                  and exploring cutting-edge AI/ML frameworks for real-world applications.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
