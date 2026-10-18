const features = [
  { title: 'Comprehensive Bank', desc: '1,300+ system-wise MCQs with detailed clinical explanations.' },
  { title: 'Exam Simulator', desc: 'Real exam experience with timers, negative marking, and instant results.' },
  { title: 'Analytics', desc: 'Track your strengths and weaknesses with detailed performance dashboards.' },
  { title: 'Refer & Earn', desc: 'Earn 20% royalty for every friend who subscribes using your code.' },
];

export default function Home() {
  return (
    <>
      <section className="py-20 text-center container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#1560BD]">Medical</span>
          <span className="text-[#E63946]">Bank</span>
        </h1>
        <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Practice with Confidence</h2>
        <p className="text-lg text-[#6B7280] mb-10 max-w-2xl mx-auto">The ultimate question bank and exam simulator for MBBS students and licensing candidates.</p>
        <div className="flex justify-center gap-4">
          <a href="https://clowd.host/a/5617beqg93" className="inline-block bg-[#1560BD] text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-[#124a90] transition-colors">
            📥 Download Android App
          </a>
          <a href="#tracks" className="inline-block border-2 border-[#1560BD] text-[#1560BD] rounded-full px-8 py-4 font-semibold text-lg hover:bg-[#1560BD] hover:text-white transition-colors">
            Explore Tracks
          </a>
        </div>
      </section>

      <section id="tracks" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <h3 className="text-2xl font-bold mb-4">MBBS</h3>
              <p className="text-[#6B7280]">Year 1 to Year 6 system-wise question banks.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <h3 className="text-2xl font-bold mb-4">Licensing Exams</h3>
              <p className="text-[#6B7280]">NRE, FCPS, USMLE, PLAB, DHA, SMLE.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-[#F5F6F8]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-[#6B7280]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
