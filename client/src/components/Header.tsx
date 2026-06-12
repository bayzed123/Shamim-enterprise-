import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/shamim-logo-HCuQXTG2EQZa4uvt57F4Ew.webp';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Custom Manufacturing', href: '#custom' },
  { label: 'Industries', href: '#industries' },
  { label: 'Quote Calculator', href: '#calculator' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={LOGO_URL} alt="Shamim Enterprise" className="h-10 w-10" />
          <span className="font-bold text-lg text-foreground hidden sm:inline">Shamim Enterprise</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              WhatsApp
            </Button>
          </a>
          <a href="#quote">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Quote
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-accent/10 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-border">
              <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full">
                  WhatsApp
                </Button>
              </a>
              <a href="#quote" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Quote
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
