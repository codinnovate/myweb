import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Adeyemi - Frontend Engineer",
  description: "",
 
};


const otterco = localFont({
  src: [
    {
      path:'./fonts/OttercoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path:'./fonts/Otterco-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path:'./fonts/Otterco-SemiBold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path:'./fonts/Otterco-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${otterco.className}`}
      >
        {children}
      </body>
    </html>
  );
}
