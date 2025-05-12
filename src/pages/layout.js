import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
// import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>MarmotFab - Engineering Solutions for Off-Road Platforms</title>
        <meta
          name="description"
          content="MarmotFab provides CAD-driven, precision-fit interface hardware designs for Toyota & Lexus vehicles."
        />
      </Head>
      <body className={`${inter.variable} antialiased`}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                MarmotFab
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
