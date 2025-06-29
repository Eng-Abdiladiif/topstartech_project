"use client"

import { motion } from "framer-motion"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import MissionVision from "@/components/sections/MissionVision"
import CTA from "@/components/sections/CTA"
import BusinessLandingPage from "@/components/sections/BusinessLandingPage"
import Testimonials from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Hero />
      <Services />
      <About />
      <MissionVision />
      <BusinessLandingPage/>
     <Testimonials/>
      <CTA />
    </motion.main>
  )
}
