export type TokenColorKey =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type TokenColor = {
  [key in TokenColorKey]: string;
};

export const zinc: TokenColor = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#0f0f10",
};

export const gray: TokenColor = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a1a1a1",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
  950: "#0a0a0a",
};

export const slate: TokenColor = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
  950: "#0c111b",
};

export const neutral: TokenColor = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
  950: "#0a0a0a",
};

export const stone: TokenColor = {
  50: "#fafaf9",
  100: "#f5f5f4",
  200: "#e7e5e4",
  300: "#d6d3d1",
  400: "#a8a29e",
  500: "#78716c",
  600: "#57534e",
  700: "#44403c",
  800: "#292524",
  900: "#1c1917",
  950: "#0d0a09",
};

export const red: TokenColor = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fca5a1",
  300: "#f87171",
  400: "#ef4444",
  500: "#dc2626",
  600: "#b91c1c",
  700: "#991b1b",
  800: "#7f1d1d",
  900: "#650a0a",
  950: "#300000",
};

export const orange: TokenColor = {
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12",
  950: "#450a0a",
};

export const amber: TokenColor = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fcd34d",
  300: "#fbbf24",
  400: "#f59e0b",
  500: "#d97706",
  600: "#b45309",
  700: "#92400e",
  800: "#78350f",
  900: "#572e0c",
  950: "#3c210f",
};

export const yellow: TokenColor = {
  50: "#fefce8",
  100: "#fef9c3",
  200: "#fef08a",
  300: "#fde047",
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  900: "#7f1d1d",
  950: "#8b6a3a",
};

export const lime: TokenColor = {
  50: "#f7fee7",
  100: "#ecfccb",
  200: "#d9f99d",
  300: "#a8e6cf",
  400: "#6ee7b7",
  500: "#34d399",
  600: "#10b981",
  700: "#059669",
  800: "#047857",
  900: "#165e33",
  950: "#0d4b1f",
};

export const green: TokenColor = {
  50: "#f0fdf4",
  100: "#dcfce7",
  200: "#bbf7d0",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#16a34a",
  700: "#15803d",
  800: "#166534",
  900: "#14532d",
  950: "#0f4c22",
};

export const emerald: TokenColor = {
  50: "#ecfdf5",
  100: "#99f6e4",
  200: "#5eead4",
  300: "#34d399",
  400: "#0f766e",
  500: "#059669",
  600: "#047857",
  700: "#065f46",
  800: "#064e3b",
  900: "#064e3b",
  950: "#062e24",
};

export const teal: TokenColor = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#28b8c8",
  500: "#0d9488",
  600: "#0f766e",
  700: "#115e59",
  800: "#134e4a",
  900: "#124c4c",
  950: "#083833",
};

export const cyan: TokenColor = {
  50: "#ecfeff",
  100: "#cffafe",
  200: "#a5f3fc",
  300: "#67e8f9",
  400: "#22d3ee",
  500: "#06b6d4",
  600: "#0e7490",
  700: "#155e75",
  800: "#164e63",
  900: "#0e4e6f",
  950: "#0b292f",
};

export const sky: TokenColor = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#06b6d4",
  600: "#0e7490",
  700: "#155e75",
  800: "#164e63",
  900: "#0e4e6f",
  950: "#0b292f",
};

export const blue: TokenColor = {
  50: "#eff6ff",
  100: "#dbEafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
  950: "#0e1a4c",
};

export const indigo: TokenColor = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81",
  950: "#1e1a78",
};

export const violet: TokenColor = {
  50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6e40c9",
  800: "#5b21b6",
  900: "#4c1d95",
  950: "#3f1a83",
};

export const purple: TokenColor = {
  50: "#faf5ff",
  100: "#f3e8ff",
  200: "#e9d5ff",
  300: "#d8b4fe",
  400: "#c084fc",
  500: "#a855f7",
  600: "#9333ea",
  700: "#7e22ce",
  800: "#6b21a8",
  900: "#581c87",
  950: "#4c1c76",
};

export const fuchsia: TokenColor = {
  50: "#fdf4ff",
  100: "#fae8ff",
  200: "#f5d0fe",
  300: "#f0abfc",
  400: "#e879f9",
  500: "#d946ef",
  600: "#a21caf",
  700: "#86198f",
  800: "#701a75",
  900: "#5b21a8",
  950: "#4a1c8c",
};

export const pink: TokenColor = {
  50: "#fdf2f8",
  100: "#fce7f3",
  200: "#fbcfe8",
  300: "#f9a8d4",
  400: "#f472b6",
  500: "#ec4899",
  600: "#db2777",
  700: "#be185d",
  800: "#9d174d",
  900: "#831843",
  950: "#501b30",
};

export const rose: TokenColor = {
  50: "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#7a1a31",
  950: "#6b172d",
};
