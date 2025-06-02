"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              My professional journey and work experience
            </p>
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
                      <Briefcase className="h-5 w-5 text-cyan-400" />
                      <h3 className="font-bold text-cyan-100">Data Science Intern</h3>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-cyan-200">Sep 2024 - Oct 2024</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyan-200">Xcel Corp - Bangalore, India</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-cyan-400">•</span>
                        <span className="text-cyan-100 leading-relaxed">
                          Assisted in data collection, pre-processing, and cleaning of datasets of more than 1500 rows
                          using Python (Pandas, NumPy).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-cyan-400">•</span>
                        <span className="text-cyan-100 leading-relaxed">
                          Worked on live image capturing for emotion detection using Python (OpenCV).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-cyan-400">•</span>
                        <span className="text-cyan-100 leading-relaxed">
                          Performed exploratory data analysis (EDA) that improved data-driven decision making.
                        </span>
                      </li>
                    </ul>
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
