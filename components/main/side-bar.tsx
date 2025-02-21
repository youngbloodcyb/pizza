import Link from "next/link";
import { Suspense } from "react";
import { VideoComponent } from "@/components/main/video";
import { PapaJohn } from "@/components/main/papa-john";

const links = [
  {
    href: "/manifesto",
    label: "Manifesto",
  },
  {
    href: "/quiz",
    label: "Exam",
  },
  {
    href: "/",
    label: "Join",
  },
];
export function SideBar() {
  return (
    <nav className="border p-4 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg uppercase font-bold">DOWN</span>
          <span className="text-lg uppercase font-bold">WITH</span>
          <span className="text-lg uppercase font-bold">BIG PIZZA</span>
        </Link>
        <p>
          Grease of giants drips, Local pies rise with fresh hope– Taste
          rebellion&apos;s slice.
        </p>
        <Suspense fallback={<p>Loading propaganda...</p>}>
          <VideoComponent fileName="video/dwbpYT" />
        </Suspense>
        <ul className="space-y-2 text-blue-700">
          {links.map((link) => (
            <li key={link.href} className="hover:text-blue-900">
              <Link href={link.href}>
                [<span className="underline">{link.label}</span>]
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="side-footer">
        <PapaJohn />
      </div>
    </nav>
  );
}
