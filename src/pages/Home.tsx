import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Award, Users, BookOpen, GraduationCap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const faqs = [
  { q: "Is my data secure?", a: "Yes, we use industry-standard cloud infrastructure (Google Firebase) to store and protect your data with strict security rules." },
  { q: "How do I get access after downloading?", a: "After downloading, register with your CNIC. Access to premium banks requires a manual payment verification of your proof." },
  { q: "Can I use the app on multiple devices?", a: "No, we strictly enforce a 1-device limit per account for security. Please contact admin if you change your phone." },
  { q: "Does the app work offline?", a: "Yes, once you have downloaded the question bank, you can practice offline, though results need internet to sync." }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      {/* Hero Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center py-24">
        <div>
          <span className="bg-blue-100 text-[#1560BD] px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">⭐ Trusted by Medical Students</span>
          <h1 className="text-6xl font-extrabold mb-6">
            <span className="text-[#1560BD]">Medical</span> <span className="text-[#E63946]">Bank</span>
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">Practice with Confidence</p>
          <p className="text-lg text-gray-600 mb-8">The ultimate question bank and exam simulator for MBBS students and licensing candidates.</p>
          <div className="flex flex-col gap-2">
            <a href="https://clowd.host/a/5617beqg93" className="bg-[#1560BD] text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-[#124a90] transition-colors w-fit">
              📥 Download Android App
            </a>
            <span className="text-sm text-gray-500">Free to download. Premium plans available.</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-[500px] border-[8px] border-gray-800 rounded-[2.5rem] bg-gray-800 shadow-2xl">
            <img src="/app-screenshot.png" className="w-full h-full rounded-[2rem] object-cover" alt="App Screenshot" />
          </div>
        </div>
      </motion.section>

      {/* Stats Row */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="grid grid-cols-3 gap-8 py-24 border-t border-b border-gray-200">
        {[ { num: "1,300+", text: "MCQs" }, { num: "15+", text: "Subjects" }, { num: "500+", text: "Active Students" } ].map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-extrabold text-[#1560BD] mb-2">{item.num}</div>
            <div className="text-gray-500">{item.text}</div>
          </div>
        ))}
      </motion.section>

      {/* Tracks Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} id="tracks" className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Track</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#1560BD] to-[#0A2E5C] text-white p-10 rounded-3xl flex items-center gap-6">
            <BookOpen size={48} />
            <div>
              <h3 className="text-2xl font-bold mb-2">MBBS</h3>
              <p>Year 1 to Year 6 system-wise question banks.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#E63946] to-[#b32b35] text-white p-10 rounded-3xl flex items-center gap-6">
            <GraduationCap size={48} />
            <div>
              <h3 className="text-2xl font-bold mb-2">Licensing Exams</h3>
              <p>NRE, FCPS, USMLE, PLAB, DHA, SMLE.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50">
              <button className="w-full flex justify-between items-center font-bold text-lg" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && <p className="text-gray-600 mt-4">{faq.a}</p>}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
