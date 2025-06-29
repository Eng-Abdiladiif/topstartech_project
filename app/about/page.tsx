import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Globe, Heart, Lightbulb, Shield, Zap } from "lucide-react"
import Image from "next/image"
import about_img from "../../image/ab_img.png"

export default function AboutPage() {
 
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, ensuring their success is our success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to solve complex problems.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and transparency in all our operations.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-background  max-w-7xl mx-auto p-2">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building the future of
              <span className="text-primary">  digital 
                <span  className="gradient-text pl-10">innovation</span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're a team of passionate innovators dedicated to creating exceptional digital experiences that transform
              businesses and empower communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-gray-900 
               text-white  rounded-xl">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-gray-100
               shadow-md  shadow-gray-500  rounded-xl">
                Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 
                <span  className="gradient-text pl-5">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe technology should empower people and businesses to achieve their full potential. Our mission
                is to create innovative solutions that bridge the gap between complex technology and real-world
                applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Since our founding, we've been committed to delivering exceptional value through cutting-edge
                technology, thoughtful design, and unparalleled customer service.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="font-medium">Goal-Oriented</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Global Impact</span>
                </div>
              </div>
            </div>
            <div className="relative  ">
              <Image
                src={about_img}
                alt="Our mission"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  )
}
