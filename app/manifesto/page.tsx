import { Section, Container, Main } from "@/components/craft";
import { TopBar } from "@/components/main/top-bar";
import { getSession } from "@/lib/helpers/session";
import { TopNav } from "@/components/main/top-nav";
import { PizzaSlice } from "@/components/main/pizza-slice";

const content = {
  marqueeMessage:
    "BIG PIZZA IS BAD FOR YOU! LEGALIZE MARINARA! DOWN WITH BIG PIZZA!",
};

export default function Manifesto() {
  const session = getSession();

  return (
    <Main>
      <TopBar message={content.marqueeMessage} />
      <TopNav session={session} />

      <Section>
        <Container className="flex flex-col items-center font-bold font-mono max-w-2xl mx-auto">
          <div className="w-64 h-64 mb-8">
            <PizzaSlice />
          </div>
          <h2 className="text-3xl mb-8 text-center">Like the best pizza, we too bleed red</h2>
          <div className="space-y-6 text-lg text-center">
            <p>
              Pizza transcends borders. From the sun-drenched shores of Hawaii to
              the icy grip of northern Sweden, from the cobblestone streets of
              Naples to your own neighborhood – pizza reigns supreme. But not all
              pizza is created equal. We're talking about the soul-stirring kind,
              crafted by hands calloused and weathered by years of dedication.
            </p>
            <p>
              Pizzaiolos who don't just toss dough, they breathe life into
              tradition with every spin. Big pizza, with its cardboard crusts and
              plastic cheese, spits on that legacy. It's a soulless machine
              churning out mediocrity.
            </p>
            <p className="text-2xl font-extrabold">We say H*CK NO.</p>
            <p className="text-xl">Our call is clear: EAT LOCAL. SUPPORT THE PIZZA MASTERS.</p>
            <p>
              They pour their hearts into every pie, nourishing their community
              one slice at a time.
            </p>
            <p className="text-2xl font-extrabold">DOWN WITH BIG PIZZA.</p>
            <p className="text-3xl font-extrabold">LET THE REAL REVOLUTION BEGIN!</p>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
