"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react";

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

const timeline = [
  {
    year: "2025 - Present",
    title: "Master of Computer Applications (MCA)",
    institution: "CHRIST (Deemed to be University)",
    location: "Bengaluru, India",
    description: "Specializing in Software Development, Machine Learning, and Deep Learning",
    color: "from-blue-500 to-purple-500"
  },
  {
    year: "2022 - 2025", 
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University Jharkhand",
    location: "Ranchi, India",
    description: "Graduated with strong foundation in computer science fundamentals",
    color: "from-green-500 to-blue-500"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    My Journey
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    I&apos;m a dedicated MCA student at CHRIST (Deemed to be University) with a passion for 
                    creating innovative digital solutions. My journey in technology began during my BCA 
                    at Amity University Jharkhand, where I developed a strong foundation in computer science.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    I specialize in Machine Learning, Deep Learning, and Full-Stack Development. 
                    My experience ranges from developing AI-powered applications to creating responsive 
                    web solutions that make a real impact.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    I believe in continuous learning and staying updated with the latest technologies. 
                    Whether it&apos;s implementing neural networks for computer vision or building scalable 
                    web applications, I&apos;m always excited to tackle new challenges.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center">
                <GraduationCapIcon className="mr-3 text-blue-500" />
                Education Timeline
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="relative flex items-start"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-4 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 shadow-lg`} />
                      
                      {/* Content */}
                      <div className="ml-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <CalendarIcon size={16} />
                          {item.year}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                          <MapPinIcon size={16} />
                          <span className="font-medium">{item.institution}</span>
                          <span className="text-sm">• {item.location}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
