"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, TrendingUp, ArrowRight, Check, Star, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development & Design",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Responsive Web Design",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization",
      "SEO Implementation",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    accent: "from-blue-50 to-blue-100",
    price: "Starting from $200",
    duration: "4-8 weeks",
    rating: 4.9,
    projects: 150,
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Complete brand identity solutions that capture your essence and resonate with your target audience.",
    features: [
      "Logo Design & Branding",
      "Brand Guidelines",
      "Marketing Materials",
      "Digital Assets",
      "Brand Strategy",
      "Visual Identity Systems",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    accent: "from-purple-50 to-purple-100",
    price: "Starting from $100",
    duration: "2-4 weeks",
    rating: 4.8,
    projects: 200,
  },
  {
    icon: Database,
    title: "ERP System Development",
    description: "Comprehensive enterprise resource planning solutions to streamline your business operations.",
    features: [
      "Custom ERP Development",
      "System Integration",
      "Data Migration",
      "Workflow Automation",
      "Reporting & Analytics",
      "Training & Support",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accent: "from-emerald-50 to-emerald-100",
    price: "Starting from $1200",
    duration: "8-16 weeks",
    rating: 4.9,
    projects: 75,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that boost your online presence and drive measurable results.",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp"],
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    accent: "from-orange-50 to-orange-100",
    price: "Starting from $2,000/month",
    duration: "Ongoing",
    rating: 4.7,
    projects: 300,
  },
]

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "725+", label: "Projects Completed" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Professional Digital Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Transform Your Business with{" "}
              <span className="gradient-text">
                Expert Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              We deliver comprehensive digital solutions that drive growth, enhance user experience, and position your
              business for long-term success in the digital landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your unique business needs and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {service.rating}
                        </div>
                        <div className="text-xs text-gray-500">{service.projects} projects</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Pricing & Duration */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-lg font-bold text-gray-900">{service.price}</div>
                        <div className="text-sm text-gray-600">Timeline: {service.duration}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-gray-500 ml-7">+{service.features.length - 4} more features</div>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {service.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white group">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality delivery and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Crafting the perfect solution approach" },
              { step: "03", title: "Development", description: "Building with precision and care" },
              { step: "04", title: "Launch", description: "Delivering results that exceed expectations" },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
