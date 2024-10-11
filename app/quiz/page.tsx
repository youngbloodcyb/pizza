import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { TopNav } from "@/components/main/top-nav";
import { getSession } from "@/lib/helpers/session";
import { Quiz } from "./quiz";
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
      <Section className="flex justify-center">
        <Quiz />
      </Section>
      {/* <Pizza /> */}
    </Main>
  );
}
