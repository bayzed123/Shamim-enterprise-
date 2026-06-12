import { Card } from '@/components/ui/card';
import { Shirt, Printer, UtensilsCrossed, Pill, Box, Wrench } from 'lucide-react';

const INDUSTRIES = [
  {
    name: 'Textile',
    description: 'Rollers and components for textile machinery',
    icon: Shirt,
  },
  {
    name: 'Printing',
    description: 'Precision rollers for printing equipment',
    icon: Printer,
  },
  {
    name: 'Food Processing',
    description: 'Food-grade seals and components',
    icon: UtensilsCrossed,
  },
  {
    name: 'Pharmaceutical',
    description: 'High-precision components for pharma equipment',
    icon: Pill,
  },
  {
    name: 'Packaging',
    description: 'Conveyor and packaging machinery parts',
    icon: Box,
  },
  {
    name: 'Manufacturing',
    description: 'General industrial components and parts',
    icon: Wrench,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across multiple industries
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                className="p-8 hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-pointer animate-in fade-in slide-in-from-bottom-8"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
