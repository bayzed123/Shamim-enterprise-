import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator } from 'lucide-react';

const PRODUCT_TYPES = [
  { value: 'oring', label: 'O-Ring', basePrice: 50 },
  { value: 'gasket', label: 'Gasket', basePrice: 75 },
  { value: 'roller', label: 'Roller', basePrice: 200 },
  { value: 'washer', label: 'Washer', basePrice: 30 },
];

const MATERIAL_TYPES = [
  { value: 'silicone', label: 'Silicone Rubber', multiplier: 1 },
  { value: 'nitrile', label: 'Nitrile Rubber', multiplier: 0.8 },
  { value: 'epdm', label: 'EPDM Rubber', multiplier: 0.9 },
  { value: 'custom', label: 'Custom Material', multiplier: 1.2 },
];

export default function QuoteCalculator() {
  const [productType, setProductType] = useState('oring');
  const [materialType, setMaterialType] = useState('silicone');
  const [diameter, setDiameter] = useState('50');
  const [thickness, setThickness] = useState('5');
  const [quantity, setQuantity] = useState('500');

  // Calculate quote
  const product = PRODUCT_TYPES.find((p) => p.value === productType);
  const material = MATERIAL_TYPES.find((m) => m.value === materialType);

  const basePrice = product?.basePrice || 50;
  const materialMultiplier = material?.multiplier || 1;
  const diameterFactor = Math.max(1, parseInt(diameter) / 50);
  const quantityDiscount = parseInt(quantity) > 1000 ? 0.9 : parseInt(quantity) > 500 ? 0.95 : 1;

  const unitPrice = basePrice * materialMultiplier * diameterFactor * quantityDiscount;
  const totalPrice = unitPrice * parseInt(quantity);
  const leadTime = Math.max(7, Math.ceil(parseInt(quantity) / 100));

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Quick Tool</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Instant Quote Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an estimated quote in seconds. Customize your specifications below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Form */}
          <Card className="p-8 animate-in fade-in slide-in-from-left-8 duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calculator size={24} className="text-primary" />
              Customize Your Order
            </h3>

            <div className="space-y-6">
              {/* Product Type */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Product Type</Label>
                <Select value={productType} onValueChange={setProductType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCT_TYPES.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material Type */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Material</Label>
                <Select value={materialType} onValueChange={setMaterialType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MATERIAL_TYPES.map((m) => (
                      <SelectItem key={m.value} value={m.value}>
                        {m.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Diameter */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">
                  Diameter (mm): {diameter}
                </Label>
                <Input
                  type="number"
                  min="10"
                  max="500"
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                  placeholder="Enter diameter"
                />
              </div>

              {/* Thickness */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">
                  Thickness (mm): {thickness}
                </Label>
                <Input
                  type="number"
                  min="1"
                  max="50"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  placeholder="Enter thickness"
                />
              </div>

              {/* Quantity */}
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">
                  Quantity (pieces): {quantity}
                </Label>
                <Input
                  type="number"
                  min="1"
                  max="100000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                />
              </div>
            </div>
          </Card>

          {/* Quote Result */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-in fade-in slide-in-from-right-8 duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-8">Estimated Quote</h3>

            <div className="space-y-6">
              {/* Unit Price */}
              <div className="pb-6 border-b border-border">
                <p className="text-muted-foreground text-sm mb-1">Unit Price</p>
                <p className="text-3xl font-bold text-primary">৳ {unitPrice.toFixed(2)}</p>
              </div>

              {/* Total Price */}
              <div className="pb-6 border-b border-border">
                <p className="text-muted-foreground text-sm mb-1">Total Price ({quantity} units)</p>
                <p className="text-4xl font-bold text-foreground">৳ {totalPrice.toFixed(0)}</p>
              </div>

              {/* Lead Time */}
              <div className="pb-6 border-b border-border">
                <p className="text-muted-foreground text-sm mb-1">Estimated Lead Time</p>
                <p className="text-2xl font-bold text-primary">{leadTime} Days</p>
              </div>

              {/* Discount Info */}
              {quantityDiscount < 1 && (
                <div className="bg-accent/20 border border-accent rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Bulk Discount Applied:</span> {((1 - quantityDiscount) * 100).toFixed(0)}% off
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <a href="https://wa.me/c/8801854212126" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg">
                  Request Detailed Quote
                </Button>
              </a>

              <p className="text-xs text-muted-foreground text-center">
                This is an estimated quote. Final pricing may vary based on specifications and current market conditions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
