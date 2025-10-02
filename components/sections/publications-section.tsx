"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, FileTextIcon, CalendarIcon, BookOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const publications = [
  {
    id: 1,
    title: "Enhancing Handwritten Alphabet Prediction with Real-time IoT Sensor Integration in ML",
    abstract: "This research presents an innovative approach to handwritten alphabet recognition by integrating IoT sensors with machine learning algorithms. The study demonstrates significant improvements in accuracy and real-time performance through sensor fusion techniques.",
    journal: "International Journal of Computer Science and AI",
    year: "2023",
    type: "Research Paper",
    status: "Published",
    link: "https://sciendo.com/article/10.2478/jsiot-2022-0004",
    keywords: ["Machine Learning", "IoT Integration", "Handwriting Recognition", "Real-time Processing", "Sensor Fusion"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Exploration of Hyperparameter Tuning in Handwritten Digit Recognition using CNN",
    abstract: "A comprehensive analysis of various hyperparameter tuning strategies for Convolutional Neural Networks in handwritten digit recognition, providing insights into optimal configurations for different datasets and computational constraints.",
    journal: "Journal of Deep Learning Applications",
    year: "2025",
    type: "Research Paper", 
    status: "Published",
    link: "https://f1000research.com/articles/14-274",
    keywords: ["Deep Learning", "CNN", "Hyperparameter Tuning", "Image Recognition", "Neural Networks"],
    color: "from-purple-500 to-pink-500"
  }
];

const PublicationCard = ({ publication, index }: { publication: any; index: number }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 bg-gradient-to-r ${publication.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
            <FileTextIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <Badge 
              variant="secondary" 
              className={`mb-2 ${
                publication.status === 'Published' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
              }`}
            >
              {publication.status}
            </Badge>
          </div>
        </div>
        
        <div className="text-right">
          <Badge variant="outline" className="mb-2">
            {publication.type}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon size={14} />
            {publication.year}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {publication.title}
      </h3>

      {/* Journal */}
      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
        {publication.journal}
      </p>

      {/* Abstract */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
        {publication.abstract}
      </p>

      {/* Keywords */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Keywords:</h4>
        <div className="flex flex-wrap gap-2">
          {publication.keywords.map((keyword: string, keyIndex: number) => (
            <Badge 
              key={keyIndex}
              variant="outline"
              className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" asChild>
        <a href={publication.link} target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon className="w-4 h-4 mr-2" />
          Read Paper
        </a>
      </Button>
    </motion.div>
  );
};

export default function PublicationsSection() {
  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%),linear-gradient(-45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] bg-[length:20px_20px]" />
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
              Publications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Research contributions in Machine Learning, Deep Learning, and AI applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Publications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <PublicationCard 
                key={publication.id} 
                publication={publication} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
