"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, TrendingUp, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development & Design",
    description:
      "Cutting-edge websites and applications built with the latest technologies for unmatched performance and user experience.",
    features: ["Next.js & React", "Performance Optimization", "Mobile-First Design", "Advanced Animations"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Palette,
    title: "Brand Design & Identity",
    description:
      "Comprehensive brand solutions that create lasting impressions and drive meaningful connections with your audience.",
    features: ["Logo & Visual Identity", "Brand Strategy", "Digital Assets", "Style Guidelines"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Scalable ERP and business management systems that streamline operations and accelerate growth.",
    features: ["Custom ERP Development", "System Integration", "Cloud Migration", "24/7 Support"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that amplify your brand presence and deliver measurable ROI.",
    features: ["SEO & Performance", "Social Media Strategy", "Content Marketing", "Analytics & Insights"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800">Our Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
            Services That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            We deliver comprehensive digital solutions that push boundaries and create exceptional value for your
            business.
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
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 card-hover"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/services">
                  <Button
                    variant="outline"
                    className="group-hover:bg-slate-50 transition-colors border-slate-300 text-slate-700 hover:text-slate-900 font-semibold"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
