import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Aofan Wang — Learning Designer, Researcher & Builder',description:'Learning experiences grounded in education, psychology, and research. Explore curriculum design, digital learning, and AI-assisted prototyping.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
