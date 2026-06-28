import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  // Added 500 (Medium) for better typography options in Tailwind
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Chariz Dianne Falco | Software Developer',
  description: 'Portfolio of Chariz Dianne Falco, a Software Developer & AI Specialist based in Iloilo, Philippines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* We apply the font variable and standard Tailwind antialiasing to the body */}
      <body className={`${poppins.variable} font-sans antialiased bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}