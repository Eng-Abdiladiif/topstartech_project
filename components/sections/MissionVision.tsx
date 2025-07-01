"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences.",
    color: "from-blue-600 via-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading digital agency that transforms how businesses operate and engage in the digital world, setting new standards for excellence and innovation.",
    color: "from-purple-600 via-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in integrity, creativity, collaboration, and continuous learning. Our client-first approach ensures every project delivers exceptional value.",
    color: "from-emerald-600 via-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function MissionVision() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">Our Foundation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Built on{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every great achievement starts with a clear vision, unwavering mission, and strong values that guide our
            journey forward.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div
                className={`relative p-8 rounded-2xl border ${value.borderColor} ${value.bgColor} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2`}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${value.color} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium hover:shadow-2xl hover:shadow-gray-900/25 transition-all duration-300 cursor-pointer group">
            <span>Ready to work with us?</span>
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
