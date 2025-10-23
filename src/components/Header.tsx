"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#0b2241] p-2 rounded-lg">
            <Car className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#0b2241]">Automotriz</span>
            <span className="font-bold text-lg text-[#ff4411] -mt-1">San Felipe</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-[#ff4411] ${
                pathname === link.href
                  ? "text-[#ff4411]"
                  : "text-[#0b2241]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#ff4411] ${
                pathname === link.href
                  ? "text-[#ff4411]"
                  : "text-[#0b2241]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
