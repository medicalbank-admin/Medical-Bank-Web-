import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Tracks', href: '/#tracks' },
  { name: 'Features', href: '/#features' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://i.imgur.com/H8Z7yKq.jpeg" alt="Medical Bank Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">
            <span className="text-[#1560BD]">Medical</span>
            <span className="text-[#E63946]">Bank</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-[#1A1A1A]">
          {navLinks.map((link) => (
            isHome && link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href.substring(2)} className="hover:text-[#1560BD] transition-colors">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-[#1560BD] transition-colors">
                {link.name}
              </Link>
            )
          ))}
          <a href="https://clowd.host/a/5617beqg93" className="bg-[#1560BD] text-white rounded-full px-5 py-2 hover:bg-[#124a90] transition-colors">
            Download
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-t">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="block py-2 text-[#1A1A1A]" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <a href="https://clowd.host/a/5617beqg93" className="block py-2 text-[#1560BD] font-bold">
            Download
          </a>
        </div>
      )}
    </header>
  );
}
