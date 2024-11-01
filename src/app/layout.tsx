import Footer from "../components/Footer/Footer";
import { Kanit } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";
import { BaziProvider } from "../contexts/BaziContext";
import "../app/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import Script from "next/script";
import NavBar from "../components/Navbar/Navbar";
import { ModalProvider } from "../contexts/ModalContext";

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: "Lab8",
  description: "A Bazi Web App",
};

export default function RootLayout({children}: {children: ReactNode}) {  
  return (
    <html lang="en" className={`${kanit.variable}`}>
      <head>
        <Script
            id="tawk-to"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                (function(){
                  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = 'https://embed.tawk.to/6711f1ab2480f5b4f58f5d6e/1iaf1g1va';
                  s1.charset = 'UTF-8';
                  s1.setAttribute('crossorigin', '*');
                  s0.parentNode.insertBefore(s1, s0);
                })();
              `,
            }}
          />
      </head>
      <body>
        <AuthProvider>
          <BaziProvider>
            <ModalProvider>
              <div className="app-container">
                <NavBar />
                <main>{children}</main>
                <footer><Footer /></footer>
              </div>
            </ModalProvider>
          </BaziProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
