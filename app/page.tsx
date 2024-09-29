import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { Pizza } from "@/components/main/3d-pizza";
import { TopNav } from "@/components/main/top-nav";
import Image from "next/image";
import { PapaJohn } from "@/components/main/papa-john";

const content = {
  marqueeMessage:
    "PIZZA TO THE PEOPLE! LEGALIZE MARINARA! DOWN WITH BIG PIZZA!",
};

export default function Home() {
  return (
    <Main>
      <TopBar message={content.marqueeMessage} />
      <TopNav />
      <PapaJohn />
      <Section>
        <Container className="flex flex-col items-center justify-center font-bold font-mono">
          <p>Grease of giants drips,</p>
          <p>Local pies rise with fresh hope–</p>
          <p>Taste rebellion&apos;s slice.</p>
        </Container>
      </Section>
      {/* <Pizza /> */}
    </Main>
  );
}
