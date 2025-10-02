"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, BrainIcon, TableIcon, EyeIcon, MessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState, useEffect } from "react";

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

const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "An intelligent resume analysis tool that helps optimize resumes for Applicant Tracking Systems (ATS) using advanced AI algorithms.",
    longDescription: "Built a comprehensive resume analyzer that evaluates resume content against job descriptions, provides ATS optimization suggestions, and offers detailed feedback on resume structure, keywords, and formatting.",
    technologies: ["Python", "Streamlit", "NLP", "Machine Learning", "ATS Optimization"],
    image: "/projects/ai-resume.png",
    demoUrl: "https://resumeanalyzer-rg.streamlit.app/",
    githubUrl: "https://github.com/RohanGutam/AI-Resume-Analyzer",
    category: "AI/ML",
    featured: false,
    icon: BrainIcon,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "90% accuracy in ATS compatibility scoring",
      "Real-time keyword optimization suggestions",
      "Support for multiple resume formats",
      "Detailed analytics and reporting"
    ]
  },
  {
    id: 2,
    title: "Full Stack Chatbot",
    description: "A sophisticated conversational AI chatbot built with React frontend and Python backend, integrating modern LLMs for intelligent responses.",
    longDescription: "Developed a full-stack chatbot application featuring real-time conversation capabilities, context-aware responses, and seamless user experience using React for the frontend and Python with LLM integration for the backend.",
    technologies: ["React", "Python", "LLM", "FastAPI", "WebSocket", "AI/ML"],
    image: "/projects/chatbot.png",
    demoUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
    featured: false,
    icon: MessageSquareIcon,
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Real-time conversation capabilities",
      "Context-aware AI responses",
      "Modern LLM integration",
      "Responsive user interface"
    ]
  },
  {
    id: 3,
    title: "Automatic Table Allotment System",
    description: "A smart web application for automatic table allocation in restaurants and events, built with React.js and Firebase.",
    longDescription: "Developed an intelligent table management system that automatically assigns optimal seating arrangements based on party size, preferences, and availability, reducing wait times and improving customer satisfaction.",
    technologies: ["React.js", "JavaScript", "Firebase", "Real-time Database", "CSS"],
    image: "/projects/table-system.png",
    demoUrl: "https://queue-gold.vercel.app",
    githubUrl: "https://github.com/RohanGutam/Table-Allotment-System",
    category: "Full-Stack",
    featured: false,
    icon: TableIcon,
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Real-time table availability tracking",
      "Smart allocation algorithms",
      "Admin dashboard for management",
      "Mobile-responsive design"
    ]
  },
  {
    id: 4,
    title: "Alphabet Prediction using ML",
    description: "Deep learning model for handwritten alphabet recognition using Convolutional Neural Networks (CNN) with high accuracy prediction.",
    longDescription: "Implemented a robust CNN model for recognizing handwritten alphabets with real-time prediction capabilities, achieving high accuracy through advanced preprocessing and model optimization techniques.",
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "OpenCV", "Image Processing"],
    image: "/projects/alphabet-ml.png",
    demoUrl: "#",
    githubUrl: "https://github.com/RohanGutam/Alphabet-Prediction-ML",
    category: "AI/ML",
    featured: false,
    icon: EyeIcon,
    color: "from-green-500 to-blue-500",
    highlights: [
      "95% accuracy on test dataset",
      "Real-time handwriting recognition",
      "Custom CNN architecture",
      "Data augmentation techniques"
    ]
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProjects = projects;

  return (
    <section className="py-20 relative overflow-hidden" suppressHydrationWarning>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate my technical skills and problem-solving abilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Spacer instead of Category Filter */}
          <div className="mb-12"></div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              >
                {/* Featured Badge - Remove this entire section */}
                
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                  </div>
                  
                  {/* Overlay on hover - Conditional */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                  >
                    {(project.title === "Automatic Table Allotment System" || project.title === "AI Resume Analyzer") && project.demoUrl && project.demoUrl !== "#" && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, hlIndex) => (
                        <li key={hlIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-green-500 mt-0.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions - Conditional rendering */}
                  <div className="flex">
                    {(project.title === "Automatic Table Allotment System" || project.title === "AI Resume Analyzer") && project.demoUrl && project.demoUrl !== "#" && (
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
