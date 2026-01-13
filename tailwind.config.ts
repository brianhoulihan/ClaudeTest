import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#0a0a0a',
        'panel-bg': '#1a1a1a',
        'panel-border': '#2a2a2a',
        'phosphor-green': '#00ff41',
        'phosphor-dim': '#00aa2a',
        amber: '#ffb000',
        'red-alert': '#ff0044',
        'display-bg': '#050505',
        metal: '#3a3a3a',
        screw: '#5a5a5a',
      },
    },
  },
  plugins: [],
} satisfies Config;
