import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Return from "@/components/Return";
import Reviews from "@/components/Reviews";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="4jwtpgw6eugrzzjm57eddyxmy6z1io"
        />
      </Head>
      <Hero />
      <Features />
      <Reviews />
      <Return />
      <Faqs />
      <Footer />
    </div>
  );
}
