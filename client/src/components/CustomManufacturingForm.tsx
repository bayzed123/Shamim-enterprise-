import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function CustomManufacturingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    material: '',
    quantity: '',
    deadline: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message
    const message = `Hi Shamim Enterprise,

I would like to request a custom manufacturing quote:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || 'N/A'}
*Material:* ${formData.material || 'Not specified'}
*Quantity:* ${formData.quantity || 'Not specified'}
*Deadline:* ${formData.deadline || 'Not specified'}

*Description:*
${formData.description}

Please provide a quote for this custom manufacturing request.`;

    // Send via WhatsApp
    const whatsappUrl = `https://wa.me/c/8801854212126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    setSubmitted(true);
    toast.success('Form submitted! Opening WhatsApp...');

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        material: '',
        quantity: '',
        deadline: '',
        description: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="custom" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Custom Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Custom Manufacturing Request
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a unique requirement? Upload your specifications and let our engineers create a custom solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Info */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-500">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What We Can Do</h3>
                <p className="text-muted-foreground mb-4">
                  From your sample or drawing, we can manufacture custom parts tailored to your exact specifications.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  'Custom size and shape manufacturing',
                  'Material selection and optimization',
                  'Rapid prototyping and testing',
                  'Volume production capabilities',
                  'Quality assurance and testing',
                  'Fast turnaround times',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Upload Info */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex gap-4">
                  <Upload size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Upload Your Files</h4>
                    <p className="text-sm text-muted-foreground">
                      You can attach images, PDF drawings, or CAD files to your request. Our team will review and provide a detailed quote.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="p-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1854 212126"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-sm font-semibold">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                />
              </div>

              {/* Material */}
              <div>
                <Label htmlFor="material" className="text-sm font-semibold">
                  Preferred Material
                </Label>
                <Input
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  placeholder="e.g., Silicone Rubber, Nitrile"
                />
              </div>

              {/* Quantity */}
              <div>
                <Label htmlFor="quantity" className="text-sm font-semibold">
                  Estimated Quantity
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Number of units"
                />
              </div>

              {/* Deadline */}
              <div>
                <Label htmlFor="deadline" className="text-sm font-semibold">
                  Required Deadline
                </Label>
                <Input
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g., 2 weeks, ASAP"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-semibold">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your custom manufacturing needs, specifications, and any special requirements..."
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
              >
                {submitted ? 'Submitted!' : 'Submit Request via WhatsApp'}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your request will be sent directly to our team via WhatsApp for immediate attention.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
