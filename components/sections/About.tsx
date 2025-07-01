"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Globe } from "lucide-react"
import Image from "next/image"
import ShowCase   from "./../../image/showcase_image.png"

const stats = [
  { icon: Users, number: "50+", label: "Expert Team Members" },
  { icon: Award, number: "500+", label: "Successful Projects" },
  { icon: Clock, number: "5+", label: "Years of Excellence" },
  { icon: Globe, number: "25+", label: "Countries Served" },
]

export default function About() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Top Star Tech</span>
            </h2>
            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of digital innovators, designers, and developers committed to transforming
              businesses through cutting-edge technology and creative solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2023, Top Star Tech has grown from a small startup to a leading digital agency, serving clients
              across the globe. Our mission is to bridge the gap between technology and business success, delivering
              solutions that not only meet but exceed expectations.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={ShowCase}
                alt="DigitalCraft Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Globe className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
