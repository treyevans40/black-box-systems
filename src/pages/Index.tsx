import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import ServicesSection from "@/components/ServicesSection";
import DeliverySection from "@/components/DeliverySection";
import SeniorLedSection from "@/components/SeniorLedSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IndustriesSection />
        <ServicesSection />
        <DeliverySection />
        <SeniorLedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
