import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Link to="/" className="text-[#1560BD] mb-4 inline-block">&larr; Back to Home</Link>
      <section className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
        <div className="text-[14px] leading-[1.5] text-[#6B7280] space-y-4">
          <p>Last Updated: 2026-10-18</p>
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
