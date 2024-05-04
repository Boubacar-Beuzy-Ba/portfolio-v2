// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaLightbulb } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <FaLightbulb width={36} height={36} title="Loading Light/Dark Toggle" />
    );

  if (resolvedTheme === "light") {
    return (
      <FaMoon
        width={15}
        height={15}
        onClick={() => {
          setTheme("dark");
        }}
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <FaSun
        width={20}
        height={20}
        className="dark:fill-white"
        onClick={() => setTheme("light")}
      />
    );
  }
}
