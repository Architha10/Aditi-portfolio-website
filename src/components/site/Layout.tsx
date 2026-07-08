import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen antialiased"
      style={{ background: "var(--color-bg)", color: "var(--color-cream)" }}
    >
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}