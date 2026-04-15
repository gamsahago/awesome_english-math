"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="trial" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Get Your <span className="text-primary">Free Consultation</span> Today
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          아이의 현재 학습 상태를 진단하고, Customized Learning Plan을 제안해 드립니다. 
          부담없이 문의해 주세요.
        </p>

        <div className="flex justify-center mb-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 text-base">
            <Link href="https://pf.kakao.com/_sZthX" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              KakaoTalk Chat
            </Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Phone</div>
              <div className="text-xl font-bold text-foreground">0507-1380-2378</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Hours</div>
              <div className="text-xl font-bold text-foreground">월-금 13:30 - 20:00</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Blog</div>
              <Link
                href="https://blog.naver.com/pdienglish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-primary hover:text-primary/80 underline underline-offset-4 break-all"
              >
                blog.naver.com/pdienglish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
