import { Card } from '@/components/ui/card';
import { Upload, CheckCircle, Zap, Shield, Truck } from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Submit Sample',
    description: 'Upload your sample, drawing, or specifications',
    icon: Upload,
  },
  {
    number: 2,
    title: 'Engineering Review',
    description: 'Our experts analyze and create production plan',
    icon: CheckCircle,
  },
  {
    number: 3,
    title: 'Production',
    description: 'Precision manufacturing with quality control',
    icon: Zap,
  },
  {
    number: 4,
    title: 'Quality Check',
    description: 'Rigorous testing and inspection',
    icon: Shield,
  },
  {
    number: 5,
    title: 'Delivery',
    description: 'Fast and reliable shipping to your location',
    icon: Truck,
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Concept to Delivery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined manufacturing process ensures quality, precision, and timely delivery
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on Mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10"></div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    {/* Step Number Badge */}
                    <div className="relative mb-4">
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="h-16 flex items-end justify-center">
                        <Icon
                          size={32}
                          className="text-primary group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>

                    {/* Arrow - Hidden on last item and mobile */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/3 transform translate-y-1/2">
                        <div className="w-6 h-1 bg-primary"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
            <p className="text-muted-foreground">Quality Assurance on every product</p>
          </Card>
          <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-2">7-14</h3>
            <p className="text-muted-foreground">Days average production time</p>
          </Card>
          <Card className="p-8 bg-white hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-muted-foreground">Customer support available</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
