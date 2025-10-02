"use client";

import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, MapPinIcon } from "lucide-react";

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

interface ContactMethod {
  icon: React.FC<any>;
  label: string;
  value: string;
  href: string;
  color: string;
  secondaryValue?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: MailIcon,
    label: "Email",
    value: "gautamrohan117@gmail.com",
    href: "mailto:gautamrohan117@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+91-8210071235",
    href: "tel:+918210071235",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "rohan-gautam-6b2268225",
    href: "https://linkedin.com/in/rohan-gautam-6b2268225",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "RohanGutam",
    href: "https://github.com/RohanGutam",
    color: "from-gray-700 to-gray-900"
  }
];

export default function ContactSection() {

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      
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
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m always open to discussing new opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed text-center">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I&apos;d love to hear from you. Let&apos;s create something amazing together!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group"
                  >
                    <a
                      href={method.href}
                      target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                      rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                    >
                      <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {method.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {method.value}
                        </p>
                        {method.secondaryValue && (
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {method.secondaryValue}
                          </p>
                        )}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Location */}
              <motion.div
                variants={fadeInUp}
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Currently Based In
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Bengaluru, India (Open to remote opportunities)
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
