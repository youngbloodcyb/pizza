import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { TopNav } from "@/components/main/top-nav";
import { PapaJohn } from "@/components/main/papa-john";
import { getSession } from "@/lib/helpers/session";
import { Suspense } from "react";
import { VideoComponent } from "@/components/main/video";

const content = {
  marqueeMessage:
    "PIZZA TO THE PEOPLE! LEGALIZE MARINARA! DOWN WITH BIG PIZZA!",
};

export default function Home() {
  const session = getSession();

  return (
    <Main>
      <TopBar message={content.marqueeMessage} />
      <TopNav session={session} />
      <PapaJohn />
      <Section>
        <Container className="flex flex-col items-center justify-center font-bold font-mono">
          <p>Grease of giants drips,</p>
          <p>Local pies rise with fresh hope–</p>
          <p>Taste rebellion&apos;s slice.</p>
        </Container>
        <Container className="flex flex-col items-center justify-center font-bold font-mono gap-4">
          <Suspense fallback={<p>Loading propaganda...</p>}>
            <VideoComponent fileName="video/dwbpYT" />
          </Suspense>
        </Container>
      </Section>
      {/* <Pizza /> */}
    </Main>
  );
}
