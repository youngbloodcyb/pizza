import { Section, Container, Main } from "@/components/craft";
import { SignUp } from "@/components/auth/sign-up";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container className="flex flex-col items-center justify-center font-bold font-mono">
          <SignUp />
        </Container>
      </Section>
    </Main>
  );
}
