import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white w-full py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xl font-bold hover:text-blue-400 transition duration-300"
          >
            MarmotFab, LLC
          </Link>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-400 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
