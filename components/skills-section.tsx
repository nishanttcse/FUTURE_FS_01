"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Brain, GitBranch } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Bootstrap", level: 70 },
        { name: "Flask", level: 65 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 70 },
      ],
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 80 },
        { name: "OpenAI API", level: 70 },
        { name: "LLM", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
        { name: "Jupyter Notebook", level: 80 },
      ],
    },
  ]

  const achievements = [
    {
      title: "300+ DSA Problems",
      description: "Solved on LeetCode and HackerRank",
      icon: "🏆",
    },
    {
      title: "Python Gold Badge",
      description: "HackerRank certification",
      icon: "🥇",
    },
    {
      title: "AWS Cloud Practitioner",
      description: "Amazon Web Services certification",
      icon: "☁️",
    },
    {
      title: "Agentblazer Champion 2025",
      description: "Salesforce Trailhead recognition",
      icon: "🚀",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional achievements
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-serif font-bold">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-sans font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-sans">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Key Achievements</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="font-serif font-bold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground font-sans">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AWS Cloud Practitioner Essentials",
                "Career Essentials in Generative AI by Microsoft",
                "Salesforce Agentblazer Champion",
                "Software Engineering Job Simulation - Accenture",
                "Generative AI The Evolution of Thoughtful Online Search",
                "Python, HTML, JavaScript, CSS, and Bootstrap - Infosys",
              ].map((cert, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="p-3 text-center justify-center border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  <span className="font-sans text-sm">{cert}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
