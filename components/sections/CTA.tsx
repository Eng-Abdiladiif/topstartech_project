"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

 function CTA() {
  return (
    <section className="relative py-24  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-black backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-black/90">Ready to Get Started?</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
          >
            Transform Your
            <span className="block gradient-text ">
              Digital Vision
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with our expert team to bring your ideas to life. From concept to deployment, we deliver exceptional
            digital solutions that drive real business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-600 to-blue-600 hover:from-blue-700 hover:to-orange-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-black/20 text-black hover:bg-white/10 hover:border-white/30 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Schedule a Call
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-slate-400 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="w-24 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-xs font-medium text-white">Company</span>
              </div>
              <div className="w-24 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-xs font-medium text-white">Brand</span>
              </div>
              <div className="w-24 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-xs font-medium text-white">Startup</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


export  default  CTA