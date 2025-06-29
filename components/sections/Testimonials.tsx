"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "DigitalCraft transformed our online presence completely. Their attention to detail and innovative approach exceeded our expectations. The ROI has been phenomenal.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The ERP system they developed streamlined our operations and increased efficiency by 40%. Exceptional work, ongoing support, and true partnership.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeStudio",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with DigitalCraft was a game-changer. They understood our vision and delivered beyond what we imagined possible. Highly recommended.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth through
            innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <div className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <Image
                  key={index}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium">Join 500+ satisfied clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
