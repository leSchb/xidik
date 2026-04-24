import type { Metadata } from "next";
import classNames from "classnames";

import { layoutFonts } from "@/shared/config/fonts";
import { layoutMetadata } from "@/shared/config/meta/layout.meta";

import "./styles/colors.css";
import "./styles/sizes.css";
import "./styles/reset.css";
import "./styles/utilities.css";
import "./styles/text.css";
import "./styles/global.css";

export const metadata: Metadata = layoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={classNames(...layoutFonts, "scrollbar")}
    >
      <body>{children}</body>
    </html>
  );
}
