import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link href="/">DroneVision</Link>
        </h1>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
