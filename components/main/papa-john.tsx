"use client";

import { Container } from "@/components/craft";
import Image from "next/image";

export function PapaJohn() {
  return (
    <Container className="flex items-center justify-center">
      <div className="animate-grow">
        <Image src="/flames.gif" alt="Flames" width={250} height={250} />
        <Image src="/papajohn.png" alt="Papa John" width={300} height={300} />
      </div>
      <style jsx>{`
        @keyframes grow {
          from {
            transform: scale(0.1);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-grow {
          animation: grow 2s ease-in-out;
        }
      `}</style>
    </Container>
  );
}
