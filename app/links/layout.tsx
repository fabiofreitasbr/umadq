import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'UMADQ',
    description: 'Congresso - União de Mocidade',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={inter.className}>
            {children}
        </div>
    )
}
