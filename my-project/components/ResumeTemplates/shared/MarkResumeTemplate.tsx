import { Phone, Instagram, Mail } from 'lucide-react';
import profileImage from '../../imports/567a11ce55be09f4101baf1b6a72d030.jpg';

export default function ResumeTemplate1() {
  return (
    <div className="min-h-screen bg-[#e8e4db] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl space-y-6">
        {/* Header Card */}
        <div className="bg-[#f5f1e8] rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Rizka Dian"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-300"
              />
            </div>

            {/* Name and Bio */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-black mb-6">Rizka Dian</h1>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                My Name is Rizka Dian, I have dedicated my career to fostering positive workplace
                environments, enhancing employee relations, and driving organizational success. My
                expertise spans various HR functions, including talent acquisition, employee
                development, performance management, and strategic planning.
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-8 bg-white rounded-full border-4 border-black px-6 py-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#fdb515] rounded-full flex items-center justify-center border-2 border-black">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg">+62 094 000 291</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#fdb515] rounded-full flex items-center justify-center border-2 border-black">
                <Instagram className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg">@username</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#fdb515] rounded-full flex items-center justify-center border-2 border-black">
                <Mail className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg">youremail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#f5f1e8] rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Experience Section */}
              <div>
                <div className="bg-[#fdb515] rounded-full border-3 border-black px-6 py-2 inline-block mb-6">
                  <h2 className="font-black text-xl tracking-wider">EXPERIENCE</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#fdb515] rounded-full border-2 border-black mt-1"></div>
                    <div>
                      <p className="text-sm italic mb-1">May 2022 - present</p>
                      <h3 className="font-black text-xl mb-1">Assistant Manager</h3>
                      <p className="font-bold">PT. Sinar Jaya</p>
                      <p className="text-sm">Tangerang Selatan - Full Time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#fdb515] rounded-full border-2 border-black mt-1"></div>
                    <div>
                      <p className="text-sm italic mb-1">Jan 2021 - Sep 2022</p>
                      <h3 className="font-black text-xl mb-1">Marketing Supervisor</h3>
                      <p className="font-bold">Apotek Sejahtera</p>
                      <p className="text-sm">Surabaya - Full Time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#fdb515] rounded-full border-2 border-black mt-1"></div>
                    <div>
                      <p className="text-sm italic mb-1">Apr 2020 - present</p>
                      <h3 className="font-black text-xl mb-1">Content Creator</h3>
                      <p className="font-bold">Lifespan Agency</p>
                      <p className="text-sm">Remote Work - Part Time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#fdb515] rounded-full border-2 border-black mt-1"></div>
                    <div>
                      <p className="text-sm italic mb-1">Dec 2020 - Feb 2021</p>
                      <h3 className="font-black text-xl mb-1">Human Resources</h3>
                      <p className="font-bold">PT. Jaya Abadi</p>
                      <p className="text-sm">Bandung - Full Time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <div className="bg-[#fdb515] rounded-full border-3 border-black px-6 py-2 inline-block mb-6">
                  <h2 className="font-black text-xl tracking-wider">EDUCATION</h2>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#fdb515] rounded-full border-2 border-black mt-1"></div>
                  <div>
                    <p className="text-sm italic mb-1">2020 - 2024</p>
                    <h3 className="font-black text-xl mb-1">Universitas Indonesia</h3>
                    <p className="font-bold">Bachelor of Economics</p>
                    <p className="text-sm font-bold">GPA 3.7/4.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Language Section */}
              <div>
                <div className="bg-[#fdb515] rounded-full border-3 border-black px-6 py-2 inline-block mb-6">
                  <h2 className="font-black text-xl tracking-wider">LANGUAGE</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black text-lg">Bahasa</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
                      <div className="h-full w-full bg-[#2d2d2d]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black text-lg">English</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
                      <div className="h-full w-[75%] bg-[#2d2d2d]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-black text-lg">Spanish</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
                      <div className="h-full w-[50%] bg-[#2d2d2d]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <div className="bg-[#fdb515] rounded-full border-3 border-black px-6 py-2 inline-block mb-6">
                  <h2 className="font-black text-xl tracking-wider">TOOLS</h2>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <div className="w-20 h-20 bg-[#ff9a00] rounded-xl border-3 border-black flex items-center justify-center">
                    <span className="font-black text-3xl text-white">Ai</span>
                  </div>
                  <div className="w-20 h-20 bg-[#31a8ff] rounded-xl border-3 border-black flex items-center justify-center">
                    <span className="font-black text-3xl text-white">Ps</span>
                  </div>
                  <div className="w-20 h-20 bg-[#9999ff] rounded-xl border-3 border-black flex items-center justify-center">
                    <span className="font-black text-3xl text-white">Pr</span>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-xl border-3 border-black flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <div className="bg-[#fdb515] rounded-full border-3 border-black px-6 py-2 inline-block mb-6">
                  <h2 className="font-black text-xl tracking-wider">SKILLS</h2>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Negotiation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Market Segmenting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Digital Marketing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Market Research</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Market Analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Communication</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">SEO Optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Finance Analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Team Leading</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl mt-0.5">•</span>
                    <span className="text-sm">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
