import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <Link to="/" className="text-[#1560BD] mb-8 inline-block font-semibold">&larr; Back to Home</Link>
      <section className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50">
        <h2 className="text-4xl font-extrabold mb-8 text-[#1A1A1A]">Privacy Policy</h2>
        <div className="text-gray-600 space-y-6 leading-relaxed">
          <p className="font-semibold">Last Updated: 2026-10-18</p>
          <p>Welcome to Medical Bank. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use the Medical Bank mobile application.</p>
          <p>1. Information We Collect: We collect Personal Identification Information (Full Name, CNIC, Email, Phone), Academic Information (Medical Track/Pathway), Device Information (Hardware ID for single-device security), Payment Proofs (images/PDFs of receipts), and Usage Data (exam results).</p>
          <p>2. How We Use Your Information: We use your data to manage your account, prevent fraudulent registrations, grant access to question banks, enforce single-device security, calculate exam scores, and verify payment proofs.</p>
          <p>3. Data Security & Storage: We use industry-standard cloud infrastructure (Google Firebase) to store your data. Your data is protected by strict security rules and payment receipts are only accessible by you and the administrative team.</p>
          <p>4. Information Sharing: We do not sell, trade, or rent your personal information. We only share data with authorized admins (to manage subscriptions) and service providers (Google Firebase).</p>
          <p>5. Data Retention & Your Rights: You can access and update your personal information via the App. To delete your account and data, contact the administrator via WhatsApp.</p>
          <p>6. Contact Us: WhatsApp: +92 314 0190099 | Email: medicalbankadmin@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
