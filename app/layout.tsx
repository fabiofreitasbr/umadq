import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
    title: "Umadq",
    description: "União de Mocidade das Assembleia de Deus de Queimados",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className + ` w-full overflow-x-hidden`}>

                <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3617HRGK6Y');
                `}
                </Script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3617HRGK6Y" />
                {children}
                </body>
        </html>
    );
}
