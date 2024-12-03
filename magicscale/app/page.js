import BrandCarousel from "@/components/ClientCarousel";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Return from "@/components/Return";
import Reviews from "@/components/Reviews";
import Head from "next/head";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <div>
      <WhatsappFloat />
      <Hero />
      <Features />
      <BrandCarousel />
      <Reviews />
      <Return />
      <Faqs />
      <Footer />
    </div>
  );
}
