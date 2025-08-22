"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-[url('/abstract-tech-coding.png')] bg-cover bg-center opacity-10"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-white/80 mr-3 animate-pulse" />
              <span className="text-white/90 font-medium text-lg tracking-wide">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Nishant Srivastava
              </span>
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 mb-8 tracking-wide">
            Aspiring Software Developer
          </h2>

          <div className="glass-effect rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-white leading-relaxed">
              Building innovative solutions with a strong foundation in{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">Data Structures & Algorithms</span>,{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">Full-Stack Development</span>, and{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">AI/ML</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-10 py-4 text-lg rounded-xl shadow-2xl hover-lift border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-bold px-10 py-4 text-lg rounded-xl hover-lift"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://linkedin.com/in/nishant-srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover-lift"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/nishant-srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover-lift"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:nishantgenius03@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover-lift"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 animate-bounce hover-lift"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
