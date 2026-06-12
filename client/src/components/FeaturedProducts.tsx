import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'orings',
    name: 'O-Rings',
    description: 'Precision rubber O-rings in various sizes and materials for sealing applications.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/product-orings-88TLxUDDPXyLLh7XRDbeRk.webp',
    specs: ['Multiple Sizes', 'Various Materials', 'ISO Certified'],
  },
  {
    id: 'gaskets',
    name: 'Gaskets & Seals',
    description: 'Custom-engineered gaskets and sealing components for industrial applications.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/product-gaskets-E9rUGi8scwZmH6gDYBEZfV.webp',
    specs: ['Custom Shapes', 'High Temperature', 'Durable'],
  },
  {
    id: 'rollers',
    name: 'Industrial Rollers',
    description: 'Pressure, printing, and conveyor rollers engineered for precision and durability.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361181863/jCxxb6pFd5QFBU3hzLFCgH/product-rollers-cCqyHAY6zSxjr4Q6GMnLiB.webp',
    specs: ['Multiple Types', 'Custom Sizes', 'Long Life'],
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of precision-engineered rubber parts and industrial components
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PRODUCTS.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a href="#quote">
                  <Button
                    variant="outline"
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <a href="#products">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
