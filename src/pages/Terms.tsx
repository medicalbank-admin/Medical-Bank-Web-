import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <Link to="/" className="text-[#1560BD] mb-8 inline-block font-semibold">&larr; Back to Home</Link>
      <section className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50">
        <h2 className="text-4xl font-extrabold mb-8 text-[#1A1A1A]">Terms & Conditions</h2>
        <div className="text-gray-600 space-y-6 leading-relaxed">
          <p className="font-semibold">Last Updated: 2026-10-18</p>
          <p>By registering an account and using the Medical Bank App, you agree to be bound by these Terms.</p>
          <p>1. Eligibility & Account Security: The App is for medical students and graduates. You must register with a valid CNIC. We strictly enforce a 1-device limit per account. Account sharing is prohibited. If you change phones, you must contact the admin to reset your device.</p>
          <p>2. Subscriptions, Payments, and Access: Access to premium banks requires a payment (e.g., 500 PKR). Payments are verified manually via uploaded proof. All payments are final. We do not offer refunds once access is granted. Pricing is subject to change.</p>
          <p>3. Intellectual Property: All questions, explanations, and UI elements are the exclusive property of Medical Bank. You may not copy, screenshot, scrape, or distribute any content. Security measures (like FLAG_SECURE) are enforced.</p>
          <p>4. Prohibited Conduct: You agree not to reverse engineer the App, upload viruses, or violate any laws.</p>
          <p>5. Disclaimer: Medical Bank is a study tool. It is not affiliated with official licensing bodies (PMDC, NRE, USMLE, etc.) and does not guarantee exam success.</p>
          <p>6. Limitation of Liability: Medical Bank shall not be liable for any indirect or consequential damages resulting from your use of the App.</p>
          <p>7. Termination: We reserve the right to suspend or terminate your account without refund if you breach these Terms.</p>
          <p>8. Contact: WhatsApp: +92 314 0190099 | Email: medicalbankadmin@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
