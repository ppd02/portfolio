"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      title: "10th position at College Level Technical Competition",
      event: "Refactor, SJBIT",
      description: "Secured 10th position competing against talented peers in a technical challenge.",
    },
    {
      title: "3rd prize in DSA Challenge and AIdea Sprint",
      event: "Technical event at SJBIT",
      description: "Recognized for problem-solving skills and innovative AI solutions.",
    },
    {
      title: "1st prize in 12-hour hackathon",
      event: "HackHive '25 organized by CBIT, Kolar",
      description: "Led a team to victory by developing an innovative solution under time constraints.",
    },
    {
      title: "Organized 24-hour hackathon",
      event: "Code Carnage",
      description: "Successfully coordinated a major hackathon with 80 teams and over 300 participants.",
    },
  ]

  return (
    <section id="achievements" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Achievements</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Recognition and accomplishments throughout my journey
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card glass-card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-cyan-400" />
                      <h3 className="font-bold text-cyan-100">{achievement.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-cyan-200">{achievement.event}</p>
                      <p className="text-sm text-cyan-100 leading-relaxed">{achievement.description}</p>
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
