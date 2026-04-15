"use client"

import Image from "next/image"
import { MapPin, Clock, Phone, Car } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Visit <span className="text-primary">Awesome 어썸영어수학전문학원</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border aspect-[4/3] lg:aspect-auto lg:min-h-[400px] relative">
            <Image src="/academy-map.png" alt="어썸영어수학전문학원 지도" fill className="object-cover" priority />
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    경상남도 양산시 물금읍 증산역로 163
                    <br />
                    재승프라자 7층 701호
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Directions</h3>
                  <p className="text-muted-foreground">
                    증산역에서 도보 3분
                    <br />
                    편의: 차량운행, 원어민강사, 주차
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>운영 중 · 20:00에 운영 종료</p>
                    <p>월-토: 13:30 - 20:00</p>
                    <p>일: 정기휴무 (매주 일요일)</p>
                    <p>05/05 어린이날 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Tel: 0507-1380-2378
                    <br />
                    Blog:{" "}
                    <a
                      href="https://blog.naver.com/pdienglish"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://blog.naver.com/pdienglish
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
