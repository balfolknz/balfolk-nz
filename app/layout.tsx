import {Cormorant_SC, Cormorant_Garamond, Dancing_Script, Libre_Baskerville} from 'next/font/google'
import '../styles/reset.scss'
import '../styles/globals.scss'
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css'

const cormorant_sc = Cormorant_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-cormorant-sc',
});

const cormorant_garamond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-cormorant-garamond',
});

const dancing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-dancing-script',
});

const libre_baskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-libre-baskerville',
});

export const metadata = {
    title: 'Balfolk NZ',
    description: 'The official website for Balfolk - New Zealand!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${cormorant_sc.variable} ${dancing_script.variable} ${libre_baskerville.variable} ${cormorant_garamond.variable}`}>
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
