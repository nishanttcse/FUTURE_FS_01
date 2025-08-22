"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Code, Star, Award, TrendingUp } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Code,
      title: "300+ DSA Problems Solved",
      description: "Completed 300+ Data Structures & Algorithms problems on LeetCode and HackerRank",
      details: "Enhanced Python and algorithmic skills through consistent practice",
      category: "Technical",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Python Gold Badge",
      description: "Earned Python Gold Badge on HackerRank",
      details: "Reduced code review time by 20%, improving team efficiency",
      category: "Certification",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      title: "Navrang Club Leadership",
      description: "Led Navrang Club socials with outstanding results",
      details: "Increased event engagement by 70%, fostering stronger community presence",
      category: "Leadership",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "90K+ Instagram Following",
      description: "Built substantial social media presence",
      details: "Achieved 90% engagement growth through targeted content strategy",
      category: "Social Media",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Star,
      title: "Agentblazer Champion 2025",
      description: "Recognized as Agentblazer Champion 2025",
      details: "Excelled in Salesforce's AI Agentforce learning path",
      category: "Recognition",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Trophy,
      title: "Multiple Certifications",
      description: "Earned certifications from top tech companies",
      details: "AWS, Microsoft, Salesforce, Accenture, and Infosys certifications",
      category: "Professional",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-primary mb-4">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Highlighting key milestones, recognitions, and accomplishments throughout my journey
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${achievement.bgColor} group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">
                          {achievement.category}
                        </Badge>
                        <h3 className="font-serif font-bold text-foreground text-lg mb-2">{achievement.title}</h3>
                      </div>
                    </div>
                    <p className="text-foreground/80 font-sans mb-3 leading-relaxed">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground font-sans">{achievement.details}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-serif font-black text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground font-sans">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-black text-primary mb-2">90K+</div>
                <div className="text-sm text-muted-foreground font-sans">Social Media Reach</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-black text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground font-sans">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-black text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground font-sans">Engagement Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
