import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Link to="/" className="text-[#1560BD] mb-4 inline-block">&larr; Back to Home</Link>
      <section className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <div className="text-[14px] leading-[1.5] text-[#6B7280] space-y-4">
          <p>Last Updated: 2026-10-18</p>
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
