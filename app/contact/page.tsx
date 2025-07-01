"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "cabdiladiifsaalax988@gmail.com",
    href: "mailto:cabdiladiifsaalax988@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Sat-Th from 8am to 5pm",
    contact: "+(252)634991174",
    href: "tel:+252634991174",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    contact: "Any Where any Time",
    href: "https://www.google.com/maps",
  },
]

const services = ["Web Development", "Brand Design", "ERP Systems", "Digital Marketing", "Consultation", "Other"]

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    if (form.current) {
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(
            () => {
                setLoading(false)
                setSubmitted(true)
            },
            (error) => {
                setLoading(false)
                setError(true)
                console.log("FAILED...", error.text)
            },
        );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              Let's start a conversation
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We're here to help you build something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{info.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{info.description}</p>
              <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{info.contact}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Send us a message</h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service.toLowerCase().replace(" ", "-")}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>
                  {error && <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Topstar Tech?</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Quick Response",
                    description: "We respond to all inquiries within 24 hours",
                  },
                  {
                    icon: MessageCircle,
                    title: "Free Consultation",
                    description: "Get expert advice on your project at no cost",
                  },
                  {
                    icon: Send,
                    title: "Detailed Proposal",
                    description: "Receive a comprehensive project proposal",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  Schedule a free consultation call to discuss your project in detail.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}