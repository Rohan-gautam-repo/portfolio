import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export default function AIResumeAnalyzer() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI Resume Analyzer</h1>
            <p className="text-xl text-gray-600 mb-6">
              AI-powered resume analysis tool with ATS optimization and skill extraction
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/rohangautam/ai-resume-analyzer" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://resumeanalyzer-rg.streamlit.app/" target="_blank" rel="noopener noreferrer">
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
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Streamlit</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">NLP</Badge>
              <Badge variant="secondary">ATS Optimization</Badge>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                AI-powered resume analysis and skill extraction
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                ATS score calculation and optimization suggestions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Experience and education parsing
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Real-time improvement recommendations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                User-friendly Streamlit interface
              </li>
            </ul>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                The AI Resume Analyzer is a comprehensive tool designed to help job seekers optimize their resumes 
                for Applicant Tracking Systems (ATS). Built with Python and Streamlit, this application uses 
                advanced natural language processing techniques to analyze resumes and provide actionable insights.
              </p>
              <p>
                The system extracts key information such as skills, experience, and education from uploaded resumes, 
                calculates an ATS compatibility score, and provides specific recommendations for improvement. This 
                helps candidates better align their resumes with modern hiring practices and increase their chances 
                of passing initial screening processes.
              </p>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Backend Processing</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Python for core logic and ML algorithms</li>
                  <li>• NLP libraries for text processing</li>
                  <li>• Pattern matching for skill extraction</li>
                  <li>• ATS scoring algorithm implementation</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend Interface</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Streamlit for interactive web interface</li>
                  <li>• File upload functionality</li>
                  <li>• Real-time analysis results</li>
                  <li>• Visual score representation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
