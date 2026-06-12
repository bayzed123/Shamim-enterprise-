import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/shamim-logo-HCuQXTG2EQZa4uvt57F4Ew.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="Shamim Enterprise" className="h-8 w-8" />
              <span className="font-bold text-lg">Shamim Enterprise</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Precision engineering meets accessible innovation. Trusted by industries that demand reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-primary transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-300 hover:text-primary transition-colors">
                  Quote Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
                  O-Rings
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
                  Gaskets & Seals
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
                  Industrial Rollers
                </a>
              </li>
              <li>
                <a href="#custom" className="text-gray-300 hover:text-primary transition-colors">
                  Custom Manufacturing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">01854-212126</p>
                  <p className="text-gray-400 text-xs">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">info@shamimenterprises.com</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Shamim Enterprise. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1XM68FdDsc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
