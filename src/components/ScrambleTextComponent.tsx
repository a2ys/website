"use client";

import { useEffect, useState } from "react";

type ScrambleTextComponentProps = {
  text: string;
  duration: number;
};

function useScrambleText(finalText: string, duration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\ ";

  useEffect(() => {
    let frame = 0;
    const totalFrames = duration / 16; // 60fps

    const animate = () => {
      const progress = frame / totalFrames;
      let result = "";

      for (let i = 0; i < finalText.length; i++) {
        if (progress * finalText.length > i) {
          result += finalText[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (frame < totalFrames) {
        frame++;
        requestAnimationFrame(animate);
      } else {
        setDisplayText(finalText);
      }
    };

    animate();
  }, [finalText, duration]);

  return displayText;
}

const ScrambleTextComponent = ({
  text,
  duration = 2000,
}: ScrambleTextComponentProps) => {
  const scrambledText = useScrambleText(text, duration);

  return (
    <h1 className="text-4xl font-bold mb-4 inline-block">{scrambledText}</h1>
  );
};

export default ScrambleTextComponent;
