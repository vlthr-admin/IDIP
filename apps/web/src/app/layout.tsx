import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"IDIP | Industrial Decision Intelligence",description:"Evidence-governed industrial asset and decision intelligence workspace."};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }