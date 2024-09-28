import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { Pizza } from "@/components/main/3d-pizza";
import { TopNav } from "@/components/main/top-nav";
import Image from "next/image";

const content = {
  marqueeMessage: "Join the revolution. Down with Big Pizza!",
};

export default function Home() {
  return (
    <Main>
      <TopBar message={content.marqueeMessage} />
      <TopNav />
      {/* <h1>Home</h1>
      <p>Hello world</p> */}
      <Container className="flex items-center justify-center">
        <div>
          <Image src="/flames.gif" alt="Flames" width={250} height={250} />
          <Image src="/papajohn.png" alt="Papa John" width={300} height={300} />
        </div>
      </Container>
      {/* <Pizza /> */}
    </Main>
  );
}
