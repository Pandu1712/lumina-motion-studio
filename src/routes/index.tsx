import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { Marquee } from "@/components/Marquee";
import { News } from "@/components/News";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OFSAT — World class energy & logistics solutions" },
      {
        name: "description",
        content:
          "OFSAT delivers premium rig moving, drilling, power solutions and heavy logistics across Oman, Saudi Arabia and the GCC since 1984.",
      },
    ],
  }),
});

function Index() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ServicesGrid />
        <AboutSection />
        <News />
      </main>
      <Footer />
    </PageTransition>
  );
}
