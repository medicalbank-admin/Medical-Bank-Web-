export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-2">
            <img src="https://i.imgur.com/H8Z7yKq.jpeg" alt="Medical Bank Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold">
              <span className="text-[#1560BD]">Medical</span>
              <span className="text-[#E63946]">Bank</span>
            </span>
          </div>
          <p className="text-sm text-[#6B7280]">&copy; 2026 Medical Bank. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right text-[#6B7280]">
          <p>WhatsApp: +92 314 0190099</p>
          <p>Email: medicalbankadmin@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
