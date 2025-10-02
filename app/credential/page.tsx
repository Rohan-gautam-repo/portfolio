import React from "react";
import Image from "next/image";
// import { ScrollProgress } from "@/components/magicui/scroll-progress";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ChevronRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Dribbble, Instagram } from "lucide-react";
import HtmlIcon from "@/components/icons/html";
import CssIcon from "@/components/icons/css";
import NodeJs from "@/components/icons/nodeJs";
import LinkedInIcon from "@/components/icons/linkedIn";
import BehenceIcon from "@/components/icons/behence";
import JavaScriptIcon from "@/components/icons/javascript";
import MongoDBIcon from "@/components/icons/mongodb";
import MySQLIcon from "@/components/icons/mysql";
import Nextjs from "@/components/icons/nextjs";
import PostgreSQLIcon from "@/components/icons/postgresql";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwindcss";
import { BorderBeam } from "@/components/magicui/border-beam";

const width = 40;
const height = 40;

export default function Page() {
  const contactData = [
    {
      icons: <LinkedInIcon width={28} height={28} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohan-gautam",
    },
    {
      icons: <BehenceIcon width={28} height={28} />,
      name: "Behance",
      url: "https://www.behance.net/rohangautam",
    },
    {
      icons: <Instagram />,
      name: "Instagram",
      url: "https://www.instagram.com/rohangautam/",
    },
    {
      icons: <Dribbble />,
      name: "Dribbble",
      url: "https://www.dribbble.com/rohangautam",
    },
  ];
  return (
    <div className="grid gap-10">
      <div className="grid sm:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="card_bg p-10 max-h-fit">
          <div className="flex items-center justify-center">
            <Image src="/_DSC8303.png" alt="profile" width={250} height={100} />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Rohan Gautam</h1>
            <p>
              <a href="mailto:rohangautam@gmail.com" className="opacity-50">
                @rohangautam
              </a>
            </p>
            <p className="flex gap-4 items-center justify-center">
              {contactData.map((contact, index) => (
                <a href={contact.url} key={index} className="card_bg p-1">
                  {contact.icons}
                </a>
              ))}
            </p>

            <Button className="cursor-pointer z-50">
              <a href="mailto:rohangautam@gmail.com">Contact Me</a>
            </Button>
          </div>
          {/* <BorderBeam duration={8} size={100} /> */}
        </div>

        {/* Right Section */}
        <div className="grid sm:col-span-2 gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400">
              I am a passionate MCA student specializing in full-stack development 
              and AI/ML technologies. With expertise in Java, Python, JavaScript, 
              and React.js, I enjoy building innovative solutions that solve real-world 
              problems. My experience includes developing AI-powered applications, 
              web systems, and machine learning models.
            </p>
          </div>

          {/* Skills Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Programming Languages
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-blue-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <JavaScriptIcon width={width} height={height} />
                      <PythonIcon width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <HtmlIcon width={width} height={height} />
                      <CssIcon width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={6} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <ReactIcon width={width} height={height} />
                      <NodeJs width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <Nextjs width={width} height={height} />
                      <TailwindIcon width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={5} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Database & Backend
                  </h3>
                  <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                    <PostgreSQLIcon width={width} height={height} />
                    <NodeJs width={width} height={height} />
                  </div>
                  <div className="flex rounded-3xl p-2 gap-4 justify-around">
                    <MongoDBIcon width={width} height={height} />
                    <MySQLIcon width={width} height={height} />
                  </div>

                  {/* <ul className="list-disc ml-6">
                    <li>MongoDB (Proficient)</li>
                    <li>PostgreSQL (Actively using)</li>
                    <li>MySQL (Proficient)</li>
                    <li>Node.js (Proficient)</li>
                  </ul> */}
                  <BorderBeam duration={4} size={100} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Experience Section */}
        <section className="py-12 card_bg px-4 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Web Developer / Designer
                </h3>
                <p className="text-gray-500 mb-2">
                  Gharagan Multipurpose Company Pvt. Ltd. | May 2022 – May 2023
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Developed and maintained responsive web applications using
                    React.js, Node.js, and MongoDB.
                  </li>
                  <li>
                    Designed logos, banners, posters, and branding materials.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-gray-500 mb-2">
                  CHRIST (Deemed to be University), Bangalore, Karnataka | July 2024 – Expected 2026
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-gray-500 mb-2">
                  Amity University Jharkhand | 2021 – 2024 | 78.2%
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Senior Secondary (12th Grade)
                </h3>
                <p className="text-gray-500 mb-2">
                  JVM Shyamali, Ranchi, Jharkhand | 2021 | 75.4%
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Secondary School (10th Grade)
                </h3>
                <p className="text-gray-500 mb-2">
                  JVM Shyamali, Ranchi, Jharkhand | 2019 | 76.8%
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Credentials Section */}
        <section className=" card_bg p-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Credentials</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Hult Prize Nami</h3>
                <p className="text-gray-700">
                  Organizing Committee Member as a Graphic Designer
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="card_bg p-4">
          <div className="container mx-auto px-4">
            <div className=""></div>
            <div className="flex">
              <div>
                <h1 className="font-bold text-4xl">Let&apos;s </h1>
                <h2 className="font-bold text-4xl">Work Together.</h2>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
