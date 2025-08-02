import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ThemeProvider>
  );
}