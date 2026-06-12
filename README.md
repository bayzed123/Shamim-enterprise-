# Shamim-enterprise-
# Shamim Enterprise - Industrial Manufacturing Website

A professional, modern website for Shamim Enterprise built with React, TypeScript, and Tailwind CSS. The website showcases precision-engineered rubber parts, rollers, and custom manufacturing solutions.

## 🎯 Features

### Core Pages
- **Home Page** - Hero section with trust badges, featured products, and manufacturing process
- **Products** - Showcase of O-Rings, Gaskets, and Industrial Rollers
- **Industries** - Industries served (Textile, Printing, Food Processing, Pharmaceutical, Packaging, Manufacturing)
- **Custom Manufacturing** - Request form for custom parts
- **Quote Calculator** - Real-time pricing calculator with bulk discounts
- **Testimonials** - Client success stories and ratings
- **Contact** - Multiple contact methods (WhatsApp, Phone, Email)

### Technical Features
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Modern Engineering Forward design philosophy
- ✅ Electric Teal (#0EA5E9) signature brand color
- ✅ Smooth animations and transitions
- ✅ WhatsApp integration for instant communication
- ✅ Real-time quote calculator with dynamic pricing
- ✅ SEO-friendly structure
- ✅ Fast performance with optimized images

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/bayzed123/Shamim-enterprise-.git
cd shamim-enterprise-web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm preview
```

## 📁 Project Structure

```
client/
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── ManufacturingProcess.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── CustomManufacturingForm.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── QuoteCalculator.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── ui/              # shadcn/ui components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary (Electric Teal)**: `#0EA5E9` - Innovation & Precision
- **Secondary (Deep Cobalt)**: `#1E40AF` - Trust & Expertise
- **Accent (Warm Amber)**: `#F59E0B` - Urgency & CTAs
- **Foreground**: `#1F2937` - Text
- **Background**: `#F9FAFB` - Page background

### Typography
- **Display Font**: Poppins (Bold 700, Semi-bold 600)
- **Body Font**: Inter (Regular 400, Medium 500)

### Animations
- Button press: 120ms scale-down
- Card hover: 200ms scale-up
- Section entrance: 400ms fade-in + slide-up
- Accent line: Continuous pulse animation

## 📊 Quote Calculator

The quote calculator provides real-time pricing based on:
- Product type (O-Ring, Gasket, Roller, Washer)
- Material type (Silicone, Nitrile, EPDM, Custom)
- Diameter (10-500mm)
- Thickness (1-50mm)
- Quantity (1-100,000 units)

**Bulk Discounts**:
- 500+ units: 5% off
- 1000+ units: 10% off

## 🔗 Integration Points

### WhatsApp Integration
All contact forms and CTAs integrate with WhatsApp for instant communication:
- WhatsApp Business: +880 1854-212126
-  link: https://wa.me/c/8801854212126
- WhatsApp link https://wa.me/message/7NWNUGK4LSYOI1
### Contact Information
- **Phone**: 01854-212126
- **Email**: confidentrubber@gmail.com
- **Location**: BangladeshNawabpur Rd, Dhaka, Bangladesh
- **Hours**: 24/7 Support via WhatsApp
- **Map link**: https://maps.app.goo.gl/weVesNvcdY5qQnBp8
## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Products

Edit `client/src/components/FeaturedProducts.tsx`:

```typescript
const PRODUCTS = [
  {
    id: 'new-product',
    name: 'Product Name',
    description: 'Product description',
    image: 'https://...',
    specs: ['Spec 1', 'Spec 2'],
  },
  // Add more products
];
```

### Updating Contact Information

Edit `client/src/components/ContactCTA.tsx` and `client/src/components/Footer.tsx` to update:
- Phone number
- Email address
- WhatsApp link
- Business hours

### Modifying Quote Calculator Pricing

Edit `client/src/components/QuoteCalculator.tsx`:

```typescript
const PRODUCT_TYPES = [
  { value: 'oring', label: 'O-Ring', basePrice: 50 },
  // Update basePrice values
];

const MATERIAL_TYPES = [
  { value: 'silicone', label: 'Silicone Rubber', multiplier: 1 },
  // Update multiplier values
];
```

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
pnpm build

# Push to GitHub
git add .
git commit -m "Update website"
git push origin main
```

### Deploy to Custom Domain

1. Update `client/public/CNAME` with your domain
2. Configure DNS records to point to GitHub Pages
3. Enable HTTPS in repository settings

## 📈 SEO Optimization
- Schecma Geo tage industry tage 
- Meta tags in `client/index.html`
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast page load times
- Structured data for rich snippets

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
pnpm dev -- --port 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Check TypeScript errors
pnpm check

# Format code
pnpm format
```

## 📝 License
Developer Sayad Md Bayezid Hosan - ( www.sayadbayezid.com) Contribute Manus ai 
This project is proprietary to Shamim Enterprise. All rights reserved.

## 👥 Support

For support and inquiries:
- **WhatsApp**: https://wa.me/c/8801854212126
- **Phone**: 01854-212126
- **Email**: info@shamimenterprises.com

---

**Last Updated**: June 2026
**Version**: 1.0.0

Shamim Enterprise Silicone Rubber Parts, O-Ring, Gasket, Washer, Pressure Roller, Printing Roller, Fusing Machine Roller এবং Conveyor Roller।
```/
├── Home
├── Products
│   ├── O-Rings
│   ├── Gaskets
│   ├── Rollers
│   └── Custom Parts
├── Custom Manufacturing
├── Quote Calculator
├── RFQ
├── Industries
├── Gallery
├── Blog
├── About
├── Contact
├── Dashboard
└── Github ```