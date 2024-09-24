import React from "react";

interface TopBarProps {
  message: string;
}

export const TopBar: React.FC<TopBarProps> = ({ message }) => {
  return (
    <div className="relative w-full overflow-hidden bg-yellow-400 py-2">
      <div
        className="whitespace-nowrap"
        style={{
          animation: "scroll 30s linear infinite",
          display: "flex",
        }}
      >
        {/* Repeat the message to give it a seamless scroll effect */}
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <span key={i} className="text-black text-lg px-5">
              {message}
            </span>
          ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .whitespace-nowrap {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
