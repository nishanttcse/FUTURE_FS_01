"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, TrendingUp, Zap } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Test Case Generator",
      period: "Apr 2025 - May 2025",
      status: "Completed",
      description:
        "AI-powered test case generator for GitHub repositories with support for multiple testing frameworks.",
      longDescription:
        "Intelligent test automation platform that analyzes GitHub repositories and generates comprehensive test cases for JUnit, pytest, Jest, and Selenium. Features code browsing, test summaries, and one-click executable test generation.",
      technologies: ["Python", "AI/ML", "GitHub API", "JUnit", "pytest", "Jest", "Selenium", "NLP"],
      achievements: [
        "Multi-framework test generation support",
        "Automated code analysis and browsing",
        "One-click executable test creation",
        "Comprehensive test coverage analysis",
      ],
      metrics: {
        frameworks: "4+",
        automation: "100%",
        coverage: "95%",
      },
      image: "/ai-test-generator-interface.png",
      githubUrl: "https://github.com/nishanttcse/Test-Case-Generator",
      featured: true,
    },
    {
      title: "LumiPysche AI Therapist",
      period: "May 2025 - Present",
      status: "Active",
      description:
        "AI-powered mental health therapist using NLP for empathetic, personalized therapeutic conversations.",
      longDescription:
        "Revolutionary mental health platform bridging the therapy gap with empathetic AI conversations. Utilizes advanced NLP and sentiment analysis to provide personalized therapeutic support, mood tracking, and crisis intervention capabilities.",
      technologies: [
        "TypeScript",
        "Next.js",
        "NLP",
        "AI/ML",
        "Sentiment Analysis",
        "Real-time Chat",
        "Mental Health APIs",
      ],
      achievements: [
        "Empathetic conversation modeling",
        "Real-time mood analysis and tracking",
        "Crisis intervention detection",
        "Personalized therapy recommendations",
      ],
      metrics: {
        accuracy: "92%",
        response: "<2s",
        satisfaction: "88%",
      },
      image: "/ai-therapist-interface.png",
      githubUrl: "https://github.com/nishanttcse/LumiPysche-Ai-Therapist",
      liveUrl: "https://lumipysche.vercel.app",
      featured: true,
    },
    {
      title: "ReWear Community Clothing Exchange",
      period: "Mar 2025 - April 2025",
      status: "Completed",
      description:
        "A full-stack platform facilitating sustainable clothing exchange through direct swaps and a point-based system.",
      longDescription:
        "Engineered a comprehensive platform that has facilitated over 1,000 clothing swaps, featuring secure user authentication, responsive design, and advanced item management with 6+ metadata fields for improved matching accuracy.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Responsive Design"],
      achievements: [
        "1,000+ clothing swaps facilitated",
        "500 daily active users",
        "35% reduction in bounce rate",
        "40% improvement in item match accuracy",
      ],
      metrics: {
        users: "500+",
        swaps: "1,000+",
        improvement: "35%",
      },
      image: "/sustainable-clothing-exchange-platform.png",
      githubUrl: "https://github.com/nishant-srivastava/rewear-community",
      liveUrl: "https://rewear-community.vercel.app",
      featured: false,
    },
    {
      title: "Elderly CareAI System",
      period: "Nov 2024 - Feb 2025",
      status: "Completed",
      description:
        "AI-powered elderly assistance system with health monitoring, anomaly detection, and predictive analytics.",
      longDescription:
        "Innovative AI system supporting 500+ users with integrated health tracking, real-time monitoring, and predictive analytics achieving 90% early detection accuracy for potential health issues.",
      technologies: ["Python", "TensorFlow", "SQLite", "AI/ML", "Predictive Analytics", "Real-time Monitoring"],
      achievements: [
        "500+ users supported",
        "30% faster response time",
        "90% early detection accuracy",
        "<0.5s query latency",
      ],
      metrics: {
        users: "500+",
        accuracy: "90%",
        responseTime: "30%",
      },
      image: "/ai-healthcare-dashboard-elderly.png",
      githubUrl: "https://github.com/nishant-srivastava/elderly-care-ai",
      featured: true,
    },
    {
      title: "AI Code Reviewer",
      period: "Oct 2024 - Nov 2024",
      status: "Completed",
      description: "ML-based automated code review system with bug detection and quality improvement suggestions.",
      longDescription:
        "Advanced NLP-powered code analysis tool supporting multiple programming languages with automated pattern recognition, achieving 85% bug detection accuracy and reducing code review time significantly.",
      technologies: ["Python", "NLP", "Machine Learning", "Static Analysis", "Multi-language Support"],
      achievements: [
        "85% bug detection accuracy",
        "10 hours/week saved in reviews",
        "15% reduction in codebase bugs",
        "40% adoption increase across 5+ languages",
      ],
      metrics: {
        accuracy: "85%",
        timeSaved: "10hrs/week",
        bugReduction: "15%",
      },
      image: "/ai-code-review-interface.png",
      githubUrl: "https://github.com/nishant-srivastava/ai-code-reviewer",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Explore my latest projects showcasing full-stack development, AI/ML implementation, and innovative
              problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden group ${
                  project.featured ? "ring-2 ring-primary/30 shadow-lg shadow-primary/5" : ""
                }`}
              >
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "lg:grid-cols-5"} gap-0`}>
                  {/* Project Image */}
                  <div className={`${project.featured ? "lg:col-span-1" : "lg:col-span-2"} relative overflow-hidden`}>
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className={`backdrop-blur-sm ${
                          project.status === "Active"
                            ? "border-green-400/50 text-green-600 bg-green-50/80"
                            : "border-blue-400/50 text-blue-600 bg-blue-50/80"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`${project.featured ? "lg:col-span-1" : "lg:col-span-3"} p-6 lg:p-8`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-sans">{project.period}</span>
                      </div>
                      <CardTitle className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-3">
                        {project.title}
                      </CardTitle>
                      <p className="text-foreground/80 font-sans leading-relaxed">{project.longDescription}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-serif font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground font-sans capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-serif font-bold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-sm font-serif font-bold text-foreground mb-3">Key Achievements</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2">
                              <TrendingUp className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-foreground/80 font-sans">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-foreground/80 font-sans mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects and explore new technologies. Let's discuss how we can
                build something amazing together.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-sans font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Zap className="h-4 w-4 mr-2" />
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
