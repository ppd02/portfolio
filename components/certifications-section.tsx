"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Python 101 for Data Science",
      issuer: "IBM",
      code: "PY0101EN",
      link: "https://courses.cognitiveclass.ai/certificates/8bd5551e11af4c4795b92e79992c6d1d",
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      code: "DA0101EN",
      link: "https://courses.cognitiveclass.ai/certificates/53c1760f2c5a44978ff5ca3bbea67851",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      achievement: "Elite + Silver, Score: 84",
      link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS57S114220116704430722",
    },
  ]

  return (
    <section id="certifications" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Certifications</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Professional certifications and courses I've completed
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card glass-card-hover">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-cyan-400" />
                      <h3 className="font-bold text-cyan-100">{cert.title}</h3>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-cyan-200">Issuer: {cert.issuer}</p>
                      {cert.code && <p className="text-sm text-cyan-200">Code: {cert.code}</p>}
                      {cert.achievement && <p className="text-sm text-cyan-200">{cert.achievement}</p>}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full bg-transparent border-cyan-400/20 text-cyan-300 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-300"
                    asChild
                  >
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Credential
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
