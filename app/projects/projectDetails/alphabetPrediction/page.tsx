import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

export default function AlphabetPrediction() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Alphabet Prediction using ML</h1>
            <p className="text-xl text-gray-600 mb-6">
              CNN-based handwritten alphabet recognition system with improved accuracy
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="https://github.com/rohangautam/alphabet-prediction-ml" target="_blank" rel="noopener noreferrer">
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
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TensorFlow/Keras</Badge>
              <Badge variant="secondary">OpenCV</Badge>
              <Badge variant="secondary">CNN</Badge>
              <Badge variant="secondary">Deep Learning</Badge>
              <Badge variant="secondary">NumPy</Badge>
              <Badge variant="secondary">Matplotlib</Badge>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Convolutional Neural Network architecture
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Handwritten alphabet recognition (A-Z)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Real-world dataset training
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                High prediction accuracy
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Image preprocessing and augmentation
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Model evaluation and performance metrics
              </li>
            </ul>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                The Alphabet Prediction using ML project implements a sophisticated handwritten alphabet 
                recognition system using Convolutional Neural Networks (CNN). This deep learning model 
                can accurately identify and classify handwritten letters from A to Z.
              </p>
              <p>
                The system utilizes real-world datasets to train the model, ensuring robust performance 
                across different handwriting styles and variations. Through careful preprocessing, data 
                augmentation, and CNN architecture optimization, the model achieves high accuracy in 
                alphabet prediction tasks.
              </p>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Model Architecture</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• CNN layers for feature extraction</li>
                  <li>• Pooling layers for dimensionality reduction</li>
                  <li>• Dropout for regularization</li>
                  <li>• Dense layers for classification</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Image preprocessing with OpenCV</li>
                  <li>• Data augmentation techniques</li>
                  <li>• Normalization and scaling</li>
                  <li>• Train/validation/test splits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">95%+</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600">26</div>
                <div className="text-sm text-gray-600">Classes (A-Z)</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600">Fast</div>
                <div className="text-sm text-gray-600">Prediction Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
