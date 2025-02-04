// src/app/layout.tsx
"usage client";

import useTheme from "@/hooks/useTheme";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <html lang="en">
      <head>
        <title>Hackathon Project</title>
      </head>
      <body className="bg-background text-foreground dark:bg-black dark:text-white">
        <div className="min-h-screen">
          <header className="flex justify-between items-center p-4 bg-gray-800">
            <h1 className="text-xl text-white">User Analytics Dashboard</h1>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-gray-600 text-white rounded-md"
            >
              Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
