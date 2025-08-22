"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Linkedin, Github, Code, Brain, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Get to know more about my background, education, and passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Sticker and Contact */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl flex items-center justify-center border-2 border-primary/20 backdrop-blur-sm relative overflow-hidden">
                  {/* Geometric Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Main Sticker Content */}
                  <div className="relative z-10 text-center">
                    {/* Avatar Circle with Initials */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-primary/20">
                      <span className="text-4xl font-serif font-black text-white">NS</span>
                    </div>

                    {/* Name and Title */}
                    <h3 className="text-2xl font-serif font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      Nishant Srivastava
                    </h3>
                    <p className="text-muted-foreground font-sans font-medium mb-4">Software Developer</p>

                    {/* Tech Icons */}
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Brain className="h-4 w-4 text-accent" />
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Contact Information Card */}
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-sans">Gorakhpur, U.P, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href="mailto:nishantgenius03@gmail.com"
                        className="font-sans hover:text-primary transition-colors"
                      >
                        nishantgenius03@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href="tel:+918423233242" className="font-sans hover:text-primary transition-colors">
                        +91-8423233242
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4 text-primary" />
                      <a
                        href="https://linkedin.com/in/nishant-srivastava"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans hover:text-primary transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4 text-primary" />
                      <a
                        href="https://github.com/nishant-srivastava"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans hover:text-primary transition-colors"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary and Education */}
            <div className="space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Professional Summary</h3>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg mb-6">
                  Aspiring Software Developer with a strong foundation in{" "}
                  <span className="text-primary font-medium">Object-Oriented Programming</span>,{" "}
                  <span className="text-primary font-medium">Data Structures & Algorithms</span> (300+ LeetCode problems
                  solved), <span className="text-primary font-medium">Database Management Systems</span>,{" "}
                  <span className="text-primary font-medium">Machine Learning</span>, Operating Systems, and Software
                  Engineering.
                </p>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                  Experienced in <span className="text-primary font-medium">REST API development</span> and{" "}
                  <span className="text-primary font-medium">full-stack engineering</span> using modern technologies
                  like Node.js, React.js, and JavaScript. Passionate about building innovative solutions and
                  continuously learning new technologies.
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Key Highlights</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 font-sans">
                      <span className="font-medium text-primary">300+ DSA Problems</span> solved on LeetCode and
                      HackerRank
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 font-sans">
                      <span className="font-medium text-primary">Full-Stack Development</span> experience with modern
                      web technologies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 font-sans">
                      <span className="font-medium text-primary">AI/ML Projects</span> with real-world applications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 font-sans">
                      <span className="font-medium text-primary">90K+ Instagram</span> audience with 90% engagement
                      growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Education</h3>
                <div className="space-y-6">
                  {/* B.Tech */}
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-serif font-bold text-foreground">
                          B.Tech in Computer Science and Engineering
                        </h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          77.07%
                        </Badge>
                      </div>
                      <p className="text-primary font-sans font-medium mb-2">
                        Pranveer Singh Institute of Technology, Kanpur
                      </p>
                      <p className="text-muted-foreground font-sans">2022 - 2026</p>
                    </CardContent>
                  </Card>

                  {/* Intermediate */}
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-serif font-bold text-foreground">Intermediate (12th)</h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          83%
                        </Badge>
                      </div>
                      <p className="text-primary font-sans font-medium mb-2">Divine Public School, Gorakhpur</p>
                      <p className="text-muted-foreground font-sans">2020 - 2021</p>
                    </CardContent>
                  </Card>

                  {/* High School */}
                  <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-serif font-bold text-foreground">High School (10th)</h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          88.8%
                        </Badge>
                      </div>
                      <p className="text-primary font-sans font-medium mb-2">Divine Public School, Gorakhpur</p>
                      <p className="text-muted-foreground font-sans">2018 - 2019</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
