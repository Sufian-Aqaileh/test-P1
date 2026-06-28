import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dental: {
          blue: "#1CA9E1",
          deep: "#0E5E8A",
          ink: "#10243A",
          mist: "#F3F8FB"
        }
      },
      fontFamily: {
        arabic: ["var(--font-cairo)", "Tajawal", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(14, 94, 138, 0.16)",
        soft: "0 16px 45px rgba(16, 36, 58, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
