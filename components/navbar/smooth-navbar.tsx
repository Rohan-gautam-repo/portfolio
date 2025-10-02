"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export default function SmoothNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isClient, setIsClient] = useState(false);
  
  // Remove problematic useScroll and useTransform to prevent hydration issues

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "shadow-lg border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md" 
          : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/cv.pdf" download="Rohan_Gautam_CV.pdf">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                Download CV
              </Button>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {isClient && navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ModeToggle />
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:hidden mt-4"
        >
          {isClient && (
            <div className="space-y-3">
              <div className="flex flex-wrap justify-center gap-2">
                {navItems.slice(0, 4).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <ModeToggle />
              </div>
            </div>
          )}
        </motion.div>
      </nav>
    </motion.header>
  );
}
