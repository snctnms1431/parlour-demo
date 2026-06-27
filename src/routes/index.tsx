import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramSection } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTAs } from "@/components/FloatingCTAs";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.fullName} | Luxury Bridal & HD Makeup Artist` },
      { name: "description", content: site.description },
      { property: "og:title", content: site.fullName },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-pearl text-onyx antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Services />
        <Portfolio />
        <VideoGallery />
        <BeforeAfter />
        <Reviews />
        <InstagramSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
