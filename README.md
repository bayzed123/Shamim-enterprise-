# Shamim Enterprise - Industrial Manufacturing Partner

Shamim Enterprise is a leading manufacturer of high-quality industrial rubber components, specializing in O-rings, gaskets, rollers, and custom-engineered sealing solutions.

## 🌐 Live Website
[Shamim Enterprise on GitHub Pages](https://bayzed123.github.io/Shamim-enterprise-/)

## ✨ Key Features
- **Product Catalog**: Detailed information about O-Rings, Gaskets, and Industrial Rollers.
- **Custom Manufacturing**: Specialized solutions tailored to industrial needs.
- **Quote Calculator**: Real-time estimation for custom orders.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **WhatsApp Integration**: Direct communication channel for inquiries.

## 🚀 Quick Start
### Prerequisites
- Node.js 20+
- pnpm 10+

### Installation
```bash
# Clone the repository
git clone https://github.com/bayzed123/Shamim-enterprise-.git
cd Shamim-enterprise-

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production
```bash
pnpm build:static
```

## 🛠 Recent Fixes
- **GitHub Actions Workflow**: Fixed the `pnpm/action-setup` version conflict by removing the redundant version specification and simplifying the `packageManager` field in `package.json`.
- **White Page Issue**: Resolved the white page issue on GitHub Pages by fixing the script entry point paths in `index.html` and configuring the correct `base` path in `vite.config.ts`.
- **Deployment Configuration**: Updated the deployment workflow to correctly target the `client/dist-static` directory for GitHub Pages artifacts.

## 📁 Project Structure
- `client/`: Frontend application code (React + Vite).
- `server/`: Backend server code (Express).
- `shared/`: Shared constants and types.
- `.github/workflows/`: Automated deployment scripts.

## 📝 How to Add Products
To add or update products, edit `client/src/components/FeaturedProducts.tsx`. Each product follows this structure:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description...',
  image: 'URL_TO_IMAGE',
  specs: ['Spec 1', 'Spec 2']
}
```

## 👥 Support
For support and inquiries:
- **WhatsApp**: [Chat with us](https://wa.me/c/8801854212126)
- **Email**: info@shamimenterprises.com
- **Phone**: +880 1854-212126

---
**Last Updated**: June 2026
**Version**: 1.0.1
