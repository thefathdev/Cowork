import Footer from "@/components/footer";
import TestimonialsSection from "@/components/home/Testimonials-section";
import BlogSection from "@/components/home/blog-section";
import CtaSection from "@/components/home/cta-section";
import FaqSection from "@/components/home/faq-section";
import FeaturesSection from "@/components/home/features-section";
import HeroSection from "@/components/home/hero-section";
import SocialProofSection from "@/components/home/social-proof-section";
import StatisticsSection from "@/components/home/statistics-section";
import VirtualTourSection from "@/components/home/virtual-tour-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Social Proof Section */}
      <SocialProofSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Virtual Tour Section */}
      <VirtualTourSection />
      {/* Statistics Section */}
      <StatisticsSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* FAQ Section */}
      <FaqSection />
      {/* CTA Section */}
      <CtaSection />
      {/* Blog Section */}
      <BlogSection />
      {/* Footer */}
      <Footer />
    </>
  );
}
