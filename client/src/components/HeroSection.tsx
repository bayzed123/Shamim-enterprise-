import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/hero-industrial-eJVyYfL45j9tJmzJem4A6S.webp';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 64, 175, 0.5) 100%), url('${HERO_BG}')`,
      }}
    >
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Accent Line */}
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Custom Parts,<br />
            <span className="text-primary">Engineered to Perfection</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl mx-auto">
            Precision rubber parts, rollers, and engineering solutions trusted by industries that demand reliability. From concept to production—faster than you think.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 py-8 border-y border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-gray-200">Quality Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">⚙</div>
              <p className="text-sm text-gray-200">Custom Manufacturing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">⚡</div>
              <p className="text-sm text-gray-200">Fast Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">🏭</div>
              <p className="text-sm text-gray-200">Industry Experience</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#quote">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2 group">
                <FileText size={20} />
                Get Quote in 60 Seconds
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </a>
            <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold gap-2">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:+8801854212126">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold gap-2">
                <Phone size={20} />
                Call Now
              </Button>
            </a>
          </div>

          {/* Phone Number */}
          <p className="mt-8 text-gray-200 text-sm">
            📞 <span className="font-semibold">01854-212126</span> • Available 24/7
          </p>
        </div>
      </div>

      {/* Animated Accent Line - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </section>
  );
}
