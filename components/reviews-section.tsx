"use client"

import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "김지현 학부모님",
    child: "중2 자녀",
    content: "수학 성적이 한 학기 만에 30점이나 올랐어요. 선생님들이 정말 꼼꼼하게 봐주셔서 아이가 자신감을 되찾았습니다.",
    rating: 5,
    subject: "수학",
  },
  {
    name: "이민수 학부모님",
    child: "초5 자녀",
    content: "영어를 싫어하던 아이가 이제는 영어 시간을 기다려요. 파닉스부터 차근차근 잡아주셔서 기초가 탄탄해졌습니다.",
    rating: 5,
    subject: "영어",
  },
  {
    name: "박서연 학부모님",
    child: "중1 자녀",
    content: "소수정예라 질문도 편하게 할 수 있고, 모르는 부분은 반복해서 설명해주셔서 아이가 수업을 좋아해요.",
    rating: 5,
    subject: "영어·수학",
  },
  {
    name: "최동현 학부모님",
    child: "초6 자녀",
    content: "월간 리포트로 아이 상태를 자세히 알 수 있어서 좋아요. 담임 선생님과의 소통이 정말 잘 됩니다.",
    rating: 5,
    subject: "수학",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-secondary-foreground">Parent Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Real Stories from <span className="text-primary">Our Parents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bright Academy를 선택한 학부모님들의 진솔한 이야기를 들어보세요.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 md:p-8 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-pretty">
                {`"${review.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.child}</p>
                </div>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {review.subject}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 bg-primary rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">4.9</div>
            <div className="text-sm text-primary-foreground/80">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
            <div className="text-sm text-primary-foreground/80">Reviews</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">98%</div>
            <div className="text-sm text-primary-foreground/80">Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">95%</div>
            <div className="text-sm text-primary-foreground/80">Recommendation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
