"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, LineChart, Laptop, Globe, Server } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      skills: ["Python", "Java", "C"],
    },
    {
      title: "Data Science & ML",
      icon: <LineChart className="h-6 w-6 text-cyan-400" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "OpenCV", "EDA"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Development Tools",
      icon: <Laptop className="h-6 w-6 text-cyan-400" />,
      skills: ["Git", "GitHub", "VS Code", "Eclipse"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
    },
    {
      title: "Frameworks",
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      skills: ["Django", "Flask"],
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Technical skills and competencies I've developed
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card glass-card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <h3 className="font-bold text-cyan-100">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-cyan-500/10 text-cyan-300 border-cyan-400/20 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/30 backdrop-blur-sm transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
