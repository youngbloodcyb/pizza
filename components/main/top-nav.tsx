import Link from "next/link";
import Image from "next/image";

export function TopNav({ session }: { session: Session | null }) {
  return (
    <nav className="bg-[#c0c0c0] border-b-2 border-[#dfdfdf] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff] p-1 font-sans">
      <div className="flex items-center justify-between space-x-1">
        <div className="flex items-center space-x-1">
          {/* <Image src="/logo.png" alt="Logo" width={32} height={32} /> */}
          <span className="text-lg uppercase font-bold">
            Down with Big Pizza
          </span>
          <span className="text-sm font-mono">
            {session
              ? `Welcome, ${session.username}`
              : "Sign in to make an impact"}
          </span>
        </div>
        <ul className="flex-wrap items-center space-x-1 text-sm hidden md:flex">
          <NavItem href="/" label="Manifesto" />
          <NavItem href="/" label="Activism" />
          <NavItem href="/" label="Join" />
          <NavItem href="/" label="Share" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="px-2 py-1 bg-[#c0c0c0] border border-[#dfdfdf] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff] hover:bg-[#d0d0d0] focus:outline-none active:border-[#000000] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080] inline-block"
      >
        {label}
      </Link>
    </li>
  );
}
