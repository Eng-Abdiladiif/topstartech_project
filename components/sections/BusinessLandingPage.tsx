"use client"

import { motion } from "framer-motion"
import { Zap, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

 function BusinessLandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 p-12 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">YOUR SUCCESS ROADMAP</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Business
                <br />
                Into a<br />
                <span className="text-gray-800">Wealth-Building Machine</span>
              </h1>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Rapid Business Transformation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Skip years of trial and error. Get a crystal-clear roadmap to scale your business from day one with
                    proven strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Systems</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Access the same powerful ERP systems used by million-dollar companies, perfectly adapted for your
                    business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Guaranteed Growth Path</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Join our elite network of 10,000+ successful entrepreneurs who are building generational wealth
                    worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Card */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-800 text-white p-6 space-y-6">
                <h3 className="text-lg font-semibold">Your 90-Day Success Timeline</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Foundation (Week 1)</h4>
                      <p className="text-sm text-gray-300">Get your personalized business blueprint and action plan.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Implementation (Weeks 2-4)</h4>
                      <p className="text-sm text-gray-300">Deploy your custom ERP system and optimization strategy.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Scaling (Months 2-3)</h4>
                      <p className="text-sm text-gray-300">Accelerate growth with our proven scaling framework.</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                  Start Your Free Journey Today →
                </Button>
              </Card>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div variants={fadeInUp} className="lg:pl-8">
            <Card className="bg-slate-800 text-white overflow-hidden">
              {/* Browser Header */}
              <div className="bg-slate-700 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-300">Business Dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Welcome, Future Business Leader!</h2>
                  <p className="text-gray-300 text-sm">Your path to success starts here</p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Business Growth</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profit Optimization</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Revenue</h4>
                    <p className="text-lg font-semibold text-green-400">↗ 7.25%</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Customers</h4>
                    <p className="text-lg font-semibold text-green-400">↗ 10.2%</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Latest Achievements</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">ERP System Implementation: Complete</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">Business Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessLandingPage;