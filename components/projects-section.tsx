"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Smile } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Showcasing my technical skills through real-world applications
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-1 lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden glass-card glass-card-hover">
              <div className="aspect-video w-full overflow-hidden">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-800/30 to-purple-900/30 backdrop-blur-sm">
                  <Smile className="h-16 w-16 text-cyan-400/60" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-100">Emotion Detection</h3>
                  <p className="text-cyan-100 leading-relaxed">
                    Designed to detect emotions such as happy, sad, angry, surprised, and neutral by analyzing facial
                    expressions in real-time. It uses a convolutional neural network (CNN) trained on a facial
                    expression dataset to classify emotions and integrates OpenCV for real-time webcam input with an
                    accuracy of 87%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300">
                      Python
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300">
                      TensorFlow
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300">
                      OpenCV
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300">
                      Streamlit
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300">
                      NumPy
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-transparent border-cyan-400/20 text-cyan-300 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link
                      href="https://github.com/kittumishra7310/emotion_detection_ml"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Repository
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-transparent border-cyan-400/20 text-cyan-300 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
