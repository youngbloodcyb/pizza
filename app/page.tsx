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
            <p>Papa John&apos;s</p>
          </div>
          <div>
            <p>Papa John&apos;s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
