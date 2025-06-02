"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Education</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">My academic background and qualifications</p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-card glass-card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-cyan-400" />
                      <h3 className="font-bold text-cyan-100">B.E in CSE (Data Science)</h3>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-cyan-200">2022 - 2026</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-200">SJB Institute of Technology</h4>
                    <p className="mt-1 text-cyan-100">CGPA: 8.61</p>
                    <div className="mt-4">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-cyan-400" />
                        <h5 className="font-medium text-cyan-100">Relevant Coursework</h5>
                      </div>
                      <p className="mt-2 text-cyan-100 leading-relaxed">
                        Operating System, Computer Networks, Data Structures and Applications, Analysis and Design of
                        Algorithms, Computational Theory, Natural Language Processing, Generative AI, Data Visualization
                      </p>
                    </div>
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
