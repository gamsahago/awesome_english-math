"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/classroom-hero.jpg"
          alt="어썸영어수학전문학원에서 즐겁게 수업받는 학생들"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-background" />
        
        {/* Hero Text on Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">#1 Parent Satisfaction 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance drop-shadow-lg">
              Build <span className="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">Confidence</span> in
              <br />
              <span className="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">English</span> &amp;{" "}
              <span className="text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">Math</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty drop-shadow">
              초등학생부터 중학생까지, Systematic Curriculum과 
              1:1 맞춤 지도로 아이들의 잠재력을 끌어올립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base shadow-lg">
                <Link href="#trial">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 px-8 text-base">
                <Link href="#curriculum">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Feature Cards Section */}
      <div className="bg-background py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                <span className="text-primary">Awesome</span> 어썸영어수학전문학원
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                양산 물금에서 아이들의 영어와 수학 실력 향상을 책임지는 전문학원입니다.
                체계적인 커리큘럼과 소수정예 수업으로 확실한 성적 향상을 약속드립니다.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">2,000+</div>
                  <div className="text-sm text-muted-foreground">Graduates</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Re-enrollment</div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Grade Guarantee</h3>
                  <p className="text-sm text-muted-foreground">3개월 내 성적 향상 보장</p>
                </div>
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-4xl font-bold mb-2">A+</h3>
                  <p className="text-sm opacity-90">Average Improvement</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-2xl p-6">
                  <h3 className="text-4xl font-bold text-secondary-foreground mb-2">92%</h3>
                  <p className="text-sm text-secondary-foreground/80">Goal Achievement</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Small Class Size</h3>
                  <p className="text-sm text-muted-foreground">최대 10명 소규모 클래스</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
