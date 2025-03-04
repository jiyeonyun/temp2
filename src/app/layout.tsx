import type { Metadata } from "next";
import { languages } from "./[lng]/i18n/setting";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });
export const generateStaticParams = async () => {
    return languages.map((lng) => ({ lng }));
};
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    params: { lng },
}: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
