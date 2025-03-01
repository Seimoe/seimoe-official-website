import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "希茉 (Seimoe) - 您的智能AI助手",
    description: "希茉是一个多功能AI助手，提供智能对话、搜索和OCR等服务。探索AI的无限可能！",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh">
        <head>
            <meta name="apple-mobile-web-app-title" content="Seimoe" />
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}

