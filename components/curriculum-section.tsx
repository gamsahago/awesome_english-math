"use client"

import { BookOpen, Calculator, GraduationCap, Target } from "lucide-react"

const curriculumData = [
  {
    icon: BookOpen,
    subject: "English",
    color: "primary",
    levels: [
      {
        level: "Elementary English",
        description: "Phonics부터 기초 Grammar, Speaking까지 체계적으로 학습",
        features: ["Phonics", "Basic Grammar", "Reading Skills", "Speaking"],
      },
      {
        level: "Middle School English",
        description: "내신 대비와 수능 기초를 위한 Advanced Learning",
        features: ["Advanced Grammar", "Reading Strategy", "Vocabulary", "Writing"],
      },
    ],
  },
  {
    icon: Calculator,
    subject: "Math",
    color: "accent",
    levels: [
      {
        level: "Elementary Math",
        description: "수학적 사고력과 연산 능력의 기초를 다지는 Foundation Course",
        features: ["연산 Master", "서술형 훈련", "Critical Thinking", "경시 대비"],
      },
      {
        level: "Middle School Math",
        description: "개념 이해부터 심화 문제까지 Complete Mastery",
        features: ["개념 완성", "유형별 훈련", "내신 대비", "선행 학습"],
      },
    ],
  },
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Systematic Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">Customized Programs</span> for Every Student
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            학년별, 수준별로 세분화된 커리큘럼으로 
            학생 개개인의 실력 향상을 이끌어 냅니다.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {curriculumData.map((curriculum) => (
            <div
              key={curriculum.subject}
              className="bg-background rounded-3xl p-8 border border-border"
            >
              {/* Subject Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    curriculum.color === "primary" 
                      ? "bg-primary/10" 
                      : "bg-accent/20"
                  }`}
                >
                  <curriculum.icon
                    className={`w-7 h-7 ${
                      curriculum.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{curriculum.subject}</h3>
                  <p className="text-muted-foreground">Expert Curriculum</p>
                </div>
              </div>

              {/* Levels */}
              <div className="space-y-6">
                {curriculum.levels.map((level) => (
                  <div
                    key={level.level}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Target className={`w-5 h-5 ${
                        curriculum.color === "primary" ? "text-primary" : "text-accent"
                      }`} />
                      <h4 className="font-bold text-foreground">{level.level}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-3 py-1.5 rounded-full ${
                            curriculum.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
