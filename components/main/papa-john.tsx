"use client";

import Image from "next/image";

export function PapaJohn() {
  return (
    <div className="animate-grow">
      <Image src="/flames.gif" alt="Flames" width={100} height={100} />
      <Image src="/papajohn.png" alt="Papa John" width={100} height={100} />
      {/* GROWING ANIMATION */}
      {/* <style jsx>{`
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
        `}</style> */}
    </div>
  );
}
