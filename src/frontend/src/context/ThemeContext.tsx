import { createContext, useContext, useEffect, useState } from "react";

export type ThemeKey = "red" | "cyan" | "yellow";

export interface ThemeValue {
  key: ThemeKey;
  name: string;
  accent: string;
  rgb: string;
}

const THEMES: Record<ThemeKey, ThemeValue> = {
  red: { key: "red", name: "Red", accent: "#FF2244", rgb: "255,34,68" },
  cyan: { key: "cyan", name: "Cyan", accent: "#00EEFF", rgb: "0,238,255" },
  yellow: {
    key: "yellow",
    name: "Yellow",
    accent: "#FFDD00",
    rgb: "255,221,0",
  },
};

interface ThemeContextValue {
  theme: ThemeValue;
  setTheme: (key: ThemeKey) => void;
  themes: typeof THEMES;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES.red,
  setTheme: () => {},
  themes: THEMES,
});

function applyTheme(theme: ThemeValue) {
  document.documentElement.style.setProperty("--dracon-accent", theme.accent);
  document.documentElement.style.setProperty("--dracon-accent-rgb", theme.rgb);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>(() => {
    const stored = localStorage.getItem("dracon-theme") as ThemeKey | null;
    return stored && THEMES[stored] ? stored : "red";
  });

  const theme = THEMES[themeKey];

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (key: ThemeKey) => {
    setThemeKey(key);
    localStorage.setItem("dracon-theme", key);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
