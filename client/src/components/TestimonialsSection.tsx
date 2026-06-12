import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ahmed Hassan',
    company: 'Textile Mills Ltd',
    role: 'Production Manager',
    content:
      'Shamim Enterprise provided us with high-quality rollers that significantly improved our production efficiency. Their quick turnaround and attention to detail is exceptional.',
    rating: 5,
  },
  {
    name: 'Fatima Khan',
    company: 'Printing Solutions',
    role: 'Technical Director',
    content:
      'We have been working with Shamim Enterprise for over 3 years. Their custom gaskets and seals have never failed us. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rajesh Sharma',
    company: 'Food Processing Industries',
    role: 'Operations Head',
    content:
      'The precision and quality of their components is outstanding. They understand our requirements and deliver exactly what we need, every time.',
    rating: 5,
  },
  {
    name: 'Md. Karim',
    company: 'Packaging Machinery',
    role: 'Procurement Officer',
    content:
      'Best supplier we have found for conveyor rollers. Their pricing is competitive and the quality is consistent. Great customer support too!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Success Stories</span>\n          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across multiple industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary font-medium">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">10K+</p>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">99%</p>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
