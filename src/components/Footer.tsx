import { Mail, MessageCircle, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2E5C] text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center space-x-2">
              <img src="https://i.imgur.com/H8Z7yKq.jpeg" alt="Medical Bank Logo" className="h-10 w-auto rounded-lg" />
              <span className="text-2xl font-bold">
                <span className="text-[#1560BD] bg-white px-2 rounded">Medical</span>
                <span className="text-[#E63946] bg-white px-2 rounded">Bank</span>
              </span>
            </div>
            <p className="text-sm text-gray-300">&copy; 2026 Medical Bank. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 text-gray-300">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><MessageCircle size={24} /></a>
              <a href="mailto:medicalbankadmin@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
            </div>
            <p>WhatsApp: +92 314 0190099</p>
            <p>Email: medicalbankadmin@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
