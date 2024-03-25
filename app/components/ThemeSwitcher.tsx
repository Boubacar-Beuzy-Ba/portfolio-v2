// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => (mounted ? setTheme("light") : setTheme("dark"))}
        className="rounded-full p-2"
      >
        {theme == "light" ? (
          <Image src={moon} width={15} height={15} alt="Moon" />
        ) : (
          <Image src={sun} width={20} height={20} alt="Sun" />
        )}
      </button>
    </div>
  );
}
