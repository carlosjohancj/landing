'use client';
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
export default function SwitchTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      color="success"
      endContent={<RiMoonFill />}
      size="lg"
      startContent={<RiSunFill />}
      aria-label="Toggle theme"
    />
  );
}
