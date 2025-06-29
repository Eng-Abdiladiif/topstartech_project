"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Zap,
  Palette,
} from "lucide-react";
import { useRef, useState } from "react";
import Html from "../../image/html.png";
import tailwindcss from "../../image/tailwindcss (1).png";
import js from "../../image/js.png";
import reactjs from "../../image/physics.png";
import nextjs from "../../image/next-js (1).png";
import mongodb from "../../image/mongodb-icon-1.png";
import wordpess from "../../image/wordpress.png";
import odoo from "../../image/odoo.png";
import Image from "next/image";
import sswo  from "../../image/ssw.png"

const projects = [
  {
    id: 1,
    title: "Sanag Social work",
    description:
      "Next-generation shopping experience with AI recommendations and immersive product visualization.",
    image: sswo,
    technologies: ["Next.js", "React.js", "Framer Motion", "ShadCN UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    size: "large",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Creative Portfolio",
    description:
      "Award-winning portfolio with stunning animations and interactive elements.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["HTML", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "medium",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description:
      "Real-time data visualization with beautiful charts and insights.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Next.js", "Aceternity UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    size: "medium",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Secure and intuitive banking experience.",
    image: "/placeholder.svg?height=250&width=300",
    technologies: ["React.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "small",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "Social Platform",
    description: "Modern social networking with real-time features.",
    image: "/placeholder.svg?height=350&width=500",
    technologies: ["Next.js", "ShadCN UI", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    size: "large",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 6,
    title: "Weather Widget",
    description: "Beautiful weather app with smooth animations.",
    image: "/placeholder.svg?height=250&width=300",
    technologies: ["React.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    size: "small",
    gradient: "from-sky-500 to-blue-600",
  },
];

const techIcons = {
  Html: Html,
  Tailwindcss: tailwindcss,
  Javascript: js,
  Reactjs: reactjs,
  Nextjs: nextjs,
  MongoDb: mongodb,
  Wordpress: wordpess,
  odoo: odoo,
};

function ModernProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.featured);

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header Section */}
      <motion.div
        style={{ opacity }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full
          bg-gray-300 border border-white/20 shadow-2xl"
        >
          <Palette className="h-6 w-6 text-violet-600" />
          <span className="text-sm font-medium text-black">
            Featured Work
          </span>
          <Sparkles className="h-4 w-4 text-yellow-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent leading-tight"
        >
          Creative
          <br />
          <span
            className="
          gradient-text "
          >
            Projects
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting digital experiences with cutting-edge technologies and
          innovative design patterns
        </motion.p>

        {/* Modern Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          {["all", "featured"].map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant="ghost"
              className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-600 to-pkink-200 text-white shadow-lg shadow-violet-500/25"
                  : "bg-gray-200 border border-white/20 hover:bg-white/80 dark:hover:bg-slate-800/80"
              }`}
            >
              {filter === "all" ? "All Projects" : "Featured"}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full -z-10"
                />
              )}
            </Button>
          ))}
        </motion.div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group ${getGridClass(project.size, index)}`}
          >
            <Card className="relative h-full overflow-hidden border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Project Image */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-xs">
                          <Zap className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm"
                        >
                          <span className="mr-1">
                            {techIcons[tech as keyof typeof techIcons]}
                          </span>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowUpRight className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Technology Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-32 text-center"
      >
        <h3 className="text-3xl font-bold mb-8 
       text-gray-900">
          Powered by Modern Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(techIcons).map(([tech, icon], index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="px-6 py-4 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/80">
                <div className="flex items-center gap-3">
                  <Image
                    src={icon}
                    alt={tech}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-medium text-gray-900">
                    {tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default ModernProjectsSection;
