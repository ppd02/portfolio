"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Get to know more about my background and interests
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a Data Science student at SJB Institute of Technology, passionate about leveraging data to solve
              real-world problems. With a strong foundation in programming and analytics, I am constantly exploring new
              technologies and methodologies in the field of data science and machine learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to apply my technical skills and analytical mindset to contribute meaningfully to projects that
              make a difference. I thrive in collaborative environments and am always eager to learn from experienced
              professionals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-4"
          >
            <Card className="glass-card glass-card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <div>
                    <h4 className="font-medium text-cyan-100">Location</h4>
                    <p className="text-sm text-cyan-200">Bangalore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card glass-card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <h4 className="font-medium text-cyan-100">Email</h4>
                    <p className="text-sm text-cyan-200">pranabpd02@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card glass-card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <div>
                    <h4 className="font-medium text-cyan-100">Phone</h4>
                    <p className="text-sm text-cyan-200">+91 8217385567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
