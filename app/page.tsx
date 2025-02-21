import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8 py-4 space-y-12">
      <div className="space-y-2">
        <div>
          <h1 className="text-xl pb-2 font-bold">We have lots of work to do</h1>
          <hr />
        </div>
        <ul className="list-disc pl-4 mt-4">
          <li>
            <p>There are over 5,900 Papa John&apos;s locations in the world</p>
          </li>
          <li>
            <p>Domino&apos;s has over 20,000 locations</p>
          </li>
          <li>
            <p>
              Daddy Johnathon and his Domino friends are raking in the dough
            </p>
          </li>
        </ul>
        <p className="text-2xl font-bold">**THIS IS UNACCEPTABLE**</p>
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="text-xl pb-2 font-bold">Information</h2>
          <hr />
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold">Manifesto</h3>
            <div className="text-sm space-y-2">
              <p>Like the best pizza, we too bleed red.</p>
              <p>
                Pizza transcends borders. From the sun-drenched shores of Hawaii
                to the icy grip of northern Sweden, from the cobblestone streets
                of Naples to your own neighborhood – pizza reigns supreme. But
                not all pizza is created equal. We're talking about the
                soul-stirring kind, crafted by hands calloused and weathered by
                years of dedication.
              </p>
              <p>
                Pizzaiolos who don't just toss dough, they breathe life into
                tradition with every spin. Big pizza, with its cardboard crusts
                and plastic cheese, spits on that legacy. It's a soulless
                machine churning out mediocrity.
              </p>
              <p>
                We say H*CK NO. Our call is clear: EAT LOCAL. SUPPORT THE PIZZA
                MASTERS.
              </p>
              <p>
                They pour their hearts into every pie, nourishing their
                community one slice at a time. DOWN WITH BIG PIZZA.
              </p>
              <p className="font-bold">LET THE REAL REVOLUTION BEGIN!</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Prapy Jonh</h3>
            <div className="text-sm space-y-2">
              <p>
                Pizza should be democratized, not overly commercialized.
                It&apos;s about time we take back power from the pizza
                oligarchy.
              </p>
              <Image
                className="w-full"
                src="/prapy.jpg"
                alt="Papa John"
                width={100}
                height={100}
              />
              <p>Prapy Jonh must be stopped.</p>
              <p className="italic">
                &quot;Tyranny is always lurking at the doorstep of unchecked
                power&quot;
              </p>
              <p className="indent-3">-George Mason</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Conspiracy</h3>
            <div className="text-sm space-y-2">
              <Image
                className="w-full"
                src="/overrated.jpg"
                alt="meme"
                width={100}
                height={100}
              />
              <p>
                Big Pizza controls the marinara trade and falsely hikes prices
                to snuff out competition.
              </p>
              <p>
                We need more balance in the pizza economy. We are given the
                illusion of choice but are being flooded by machine-made pizza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
