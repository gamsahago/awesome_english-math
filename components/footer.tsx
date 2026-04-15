import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/academy-logo-transparent.png"
                alt="어썸영어수학전문학원 로고"
                width={806}
                height={189}
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed">
              어썸영어수학전문학원 - 교육청허가 제1830호
              <br />
              경남 양산 증산역앞
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="text-background/70 hover:text-background transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-background/70 hover:text-background transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-background/70 hover:text-background transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Contact Us</h4>
            <ul className="space-y-2 text-background/70">
              <li>0507-1380-2378</li>
              <li>경남 양산 증산역앞</li>
              <li>blog.naver.com/pdienglish</li>
              <li>경상남도 양산시 물금읍 증산역로 163</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 Awesome 어썸영어수학전문학원. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs md:text-sm text-background/70 text-center leading-relaxed">
          수강료 안내 - 초등파닉스 월1200분 25만원, 초등영어 26만원, 중등영어 28만원, 초등수학 17만원, 중등수학 23만원
        </p>
      </div>
    </footer>
  )
}
