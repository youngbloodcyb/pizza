import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { Pizza } from "@/components/main/3d-pizza";
import { TopNav } from "@/components/main/top-nav";

const content = {
  marqueeMessage: "Join the revolution. Down with Big Pizza!",
};

export default function Home() {
  return (
    <Main>
      <TopBar message={content.marqueeMessage} />
      <TopNav />
      <h1>Home</h1>
      <p>Hello world</p>
      {/* <Pizza /> */}
    </Main>
  );
}
