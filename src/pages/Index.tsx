import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketsSection from "@/components/MarketsSection";
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
        <MarketsSection />
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
