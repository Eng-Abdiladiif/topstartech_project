"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import sswo  from "../../image/ssw.png"

const projects = [
  {
    title: "Sanaag Social Work",
    description:
      "Sanaag Social Workers Organization (SSWO) to provide the social welfare and community engagement with sanaag region,SSWO was established in 2022.",
    image: sswo,
    tags: ["Next.js", "TypeScript", "Stripe", "AI"],
    category: "Web Development",
    link: "https://sswo.in/",
    github: "#",
  },
  {
    title: "Brand Identity System",
    description: "Complete brand redesign for a fintech startup, including logo, guidelines, and digital assets.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "UI/UX", "Figma", "Adobe"],
    category: "Brand Design",
    link: "#",
    github: "#",
  },
  {
    title: "Enterprise ERP Solution",
    description: "Custom ERP system for manufacturing company with inventory management and reporting capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    category: "ERP Development",
    link: "#",
    github: "#",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our most impactful work and see how we've helped businesses achieve their digital
            transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4">
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
