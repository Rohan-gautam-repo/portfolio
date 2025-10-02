import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export default function TableAllotmentSystem() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Automatic Table Allotment System</h1>
            <p className="text-xl text-gray-600 mb-6">
              Smart restaurant table allocation system with admin and customer interfaces
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/rohangautam/table-allotment-system" target="_blank" rel="noopener noreferrer">
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
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Firebase</Badge>
              <Badge variant="secondary">Real-time Database</Badge>
              <Badge variant="secondary">CSS</Badge>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Smart table allocation based on wait times
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                10-minute reservation system
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Real-time queue management
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Admin dashboard for restaurant management
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Customer interface for booking and tracking
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Automatic status updates and notifications
              </li>
            </ul>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                The Automatic Table Allotment System is a comprehensive restaurant management solution that 
                streamlines the table booking and allocation process. Built with React.js and Firebase, it 
                provides both customers and restaurant staff with efficient tools for managing table reservations.
              </p>
              <p>
                The system features an intelligent queueing mechanism that allocates tables based on wait times 
                and customer preferences. With a 10-minute reservation window, it ensures optimal table 
                utilization while providing customers with real-time updates on their booking status.
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
                  <li>• React.js for component-based UI</li>
                  <li>• Responsive design for mobile and desktop</li>
                  <li>• Real-time data synchronization</li>
                  <li>• Interactive booking interface</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Backend Services</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Firebase for real-time database</li>
                  <li>• Queue management algorithms</li>
                  <li>• Automatic status updates</li>
                  <li>• Time-based reservation system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
