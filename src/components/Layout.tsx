import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen text-[#1A1A1A]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
