import { font } from "@/theme/theme";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bytebank",
  description: "By FIAP Tech Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
