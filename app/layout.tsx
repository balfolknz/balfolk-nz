import {Cormorant_SC} from 'next/font/google'
import './globals.scss'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant_sc = Cormorant_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-cormorant_sc',
});

export const metadata = {
    title: 'Balfork NZ',
    description: 'The official website for Balfork - New Zealand!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${cormorant_sc.variable}`}>
        <body>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
