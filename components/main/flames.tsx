import React, { useState, useEffect } from "react";

const AsciiFlames: React.FC = () => {
  const [flameColors, setFlameColors] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newColors = generateFlameColors();
      setFlameColors(newColors);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const generateFlameColors = () => {
    const colors: string[] = [];
    for (let i = 0; i < 20; i++) {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 128);
      const blue = 0;
      colors.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colors;
  };

  const renderFlames = () => {
    const flames = [
      "       /\\",
      "      /  \\",
      "     /    \\",
      "    /      \\",
      "   /        \\",
      "  /          \\",
      " /            \\",
      "/              \\",
    ];

    return flames.map((flame, index) => (
      <span key={index} style={{ color: flameColors[index] }}>
        {flame}
        <br />
      </span>
    ));
  };

  return <div>{renderFlames()}</div>;
};

export default AsciiFlames;
