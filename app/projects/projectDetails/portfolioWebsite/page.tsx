import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
            <p className="text-xl text-gray-600 mb-6">
              Modern responsive portfolio built with React.js and Next.js
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/rohangautam/portfolio-website" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Framer Motion</Badge>
              <Badge variant="secondary">Responsive Design</Badge>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Modern and responsive design
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Dark/Light theme toggle
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Project showcase with detailed pages
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Skills and technology display
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Contact information and social links
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                SEO optimized with Next.js
              </li>
            </ul>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                This portfolio website showcases my projects, skills, and professional journey as a 
                full-stack developer and MCA student. Built with modern web technologies, it provides 
                a comprehensive view of my technical capabilities and achievements.
              </p>
              <p>
                The website features a clean, modern design with smooth animations and responsive 
                layouts that work seamlessly across all devices. It includes detailed project 
                showcases, educational background, and contact information, making it easy for 
                potential employers and collaborators to understand my expertise.
              </p>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend Architecture</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Next.js for server-side rendering</li>
                  <li>• React.js for component-based UI</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Design & UX</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Responsive design principles</li>
                  <li>• Dark/Light theme support</li>
                  <li>• Smooth animations and transitions</li>
                  <li>• Accessibility best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
