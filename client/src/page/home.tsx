import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import IndustriesSection from '@/components/IndustriesSection';
import CustomManufacturingForm from '@/components/CustomManufacturingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteCalculator from '@/components/QuoteCalculator';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <ManufacturingProcess />
      <IndustriesSection />
      <CustomManufacturingForm />
      <TestimonialsSection />
      <QuoteCalculator />
      <ContactCTA />
      <Footer />
    </div>
  );
}
