import BrandCarousel from "@/components/ClientCarousel";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Return from "@/components/Return";
import Reviews from "@/components/Reviews";
import Head from "next/head";
// import WhatsappFloat from "@/components/WhatsappFloat";
import WhatsAppFloatingIcon from "@/components/WhatsappFloat";
import CustomerReview from "@/components/Testimonials/CustomerReview";
import Founder from "@/components/Founder/Founder";
import Timestamp from "@/components/Timeline/Timestamp";
import StickyButton from "@/components/StickyButton";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      {/* <div
        className="fixed sm:hidden w-full
       bottom-0 right-0 z-50"
      >
        <StickyButton />
      </div> */}
      <div className="z-100">
        <WhatsAppFloatingIcon />
      </div>
      <Hero />
      <Timestamp />
      <CustomerReview />
      <Founder />
      {/* <Features /> */}
      {/* <BrandCarousel /> */}
      {/* <Reviews /> */}
      <Return />
      <Faqs />
      <Footer />
    </div>
  );
}
