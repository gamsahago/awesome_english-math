"use client"

import { 
  Users, 
  Clock, 
  MessageSquare, 
  Award,
  BookCheck,
  HeartHandshake
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Small Class",
    description: "최대 10명의 소규모 반 편성으로 학생 개개인에게 집중합니다.",
    highlight: "Max 8",
  },
  {
    icon: Clock,
    title: "Self-Study Room",
    description: "방과 후 자습실을 무료로 제공하여 올바른 학습 습관을 길러줍니다.",
    highlight: "Free Access",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description: "Monthly Report와 정기 상담으로 아이의 성장을 함께 확인합니다.",
    highlight: "Monthly Report",
  },
  {
    icon: Award,
    title: "Expert Teachers",
    description: "영어 및 수학분야 전문 강사가 직접 수업을 진행합니다.",
    highlight: "MA Degree+",
  },
  {
    icon: BookCheck,
    title: "Custom Materials",
    description: "학원 자체 개발 교재로 효율적인 학습이 가능합니다.",
    highlight: "Original",
  },
  {
    icon: HeartHandshake,
    title: "1:1 Care System",
    description: "담임 선생님이 배정되어 학습과 진로 상담을 책임집니다.",
    highlight: "Homeroom",
  },
]

export function FeaturesSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why <span className="text-primary">Bright Academy</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            15년간 쌓아온 교육 노하우로 아이들의 꿈을 응원합니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
