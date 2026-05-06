import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { NoorHeader } from "@/components/noor/NoorHeader";
import { NoorHero } from "@/components/noor/NoorHero";
import { NoorMarquee } from "@/components/noor/NoorMarquee";
import { NoorCollection } from "@/components/noor/NoorCollection";
import { NoorStory } from "@/components/noor/NoorStory";
import { NoorSourcing } from "@/components/noor/NoorSourcing";
import { NoorContact } from "@/components/noor/NoorContact";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NOOR — Heirloom dry fruits, hand-picked since 1962" },
      {
        name: "description",
        content:
          "NOOR is a third-generation house of premium dry fruits — single-origin almonds, pistachios, dates, cashews, walnuts and Mongra saffron sourced directly from Kashmir, Iran and Jordan.",
      },
      { property: "og:title", content: "NOOR — Heirloom dry fruits, hand-picked" },
      {
        property: "og:description",
        content: "Six rare harvests sourced directly from the world's most celebrated groves. No middlemen. No compromise.",
      },
    ],
  }),
});

function Index() {
  return (
    <PageTransition>
      <NoorHeader />
      <main>
        <NoorHero />
        <NoorMarquee />
        <SectionDivider label="The Collection" />
        <NoorCollection />
        <SectionDivider label="Our Story" />
        <NoorStory />
        <SectionDivider label="Sourcing" />
        <NoorSourcing />
        <NoorContact />
      </main>
    </PageTransition>
  );
}
