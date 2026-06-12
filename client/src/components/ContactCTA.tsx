import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Connect with our team today. We're available 24/7 to answer your questions and provide custom solutions.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* WhatsApp */}
            <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group cursor-pointer">
                <MessageCircle size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-white/80">Chat instantly</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+8801854212126">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group cursor-pointer">
                <Phone size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-white/80">01854-212126</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@shamimenterprises.com">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group cursor-pointer">
                <Mail size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-white/80">Contact us</p>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group cursor-pointer">
              <MapPin size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-white/80">Bangladesh</p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold gap-2">
                <MessageCircle size={20} />
                Start Chat on WhatsApp
              </Button>
            </a>
            <a href="#quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Get Quote
              </Button>
            </a>
          </div>

          {/* Business Hours */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/80 mb-2">
              <span className="font-semibold">Business Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM (Bangladesh Time)
            </p>
            <p className="text-sm text-white/80">
              <span className="font-semibold">Emergency Support:</span> Available 24/7 via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
