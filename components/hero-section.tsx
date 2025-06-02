"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <img
                  src="public/Profile_pic1.jpg"
                  alt="Pranab Prakash Das"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                Pranab Prakash Das
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mt-2">Data Science Professional</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl text-center"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Dedicated and curious Data Science professional-in-training with proficiency in Python and machine
              learning. Excited to collaborate with cross-functional teams and continuously learn while solving
              real-world challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg transition-all duration-300"
            >
              <a href="/templates/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-slate-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              <a href="https://github.com/ppd02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-slate-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              <a
                href="https://www.linkedin.com/in/pranab-pd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-slate-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              <a href="mailto:pranabpd02@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
