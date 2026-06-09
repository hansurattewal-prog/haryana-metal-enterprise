import { useState } from "react";
import { MapPin, Phone, Mail, Clock, HelpCircle, ChevronDown, Check, Copy } from "lucide-react";
import { COMPANY_INFO, FAQS } from "../data";

export default function Contact() {
  const [copiedText, setCopiedText] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText("");
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs component before contact links */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[#B22222] text-xs font-mono font-bold uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-sm">
              HAVE QUESTIONS?
            </span>
            <h2 className="font-display font-black text-3xl text-gray-900 tracking-tight">
              Sourcing FAQs & Engineering Inquiries
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              Critical guidelines on custom shearing, brand certifications, delivery logistics, and turnkey warehouse builds.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-bold text-gray-900 text-sm sm:text-base pr-4 flex items-center leading-normal">
                      <HelpCircle className="w-4 h-4 text-[#B22222] mr-2 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? "transform rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 pt-8 border-t border-gray-200">
          
          {/* Left Block: Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#B22222] text-xs font-mono font-bold uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-sm">
                VERIFIED COORDINATES
              </span>
              <h2 className="font-display font-black text-3xl text-gray-900 tracking-tight mt-3">
                Let's Lay Down Your Structural Plan
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                Visit our main metal enterprise yard in Rithala to inspect structural steel tubes and sheet colors, or request a precise dispatch over the phone.
              </p>
            </div>

            {/* Direct Details list */}
            <div className="space-y-4">
              
              {/* Yard Location */}
              <div className="bg-white border border-gray-200 rounded-sm p-5 flex items-start space-x-4 shadow-sm relative">
                <MapPin className="w-5 h-5 text-[#B22222] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Main Address & Yard</p>
                  <p className="text-gray-900 font-sans text-xs sm:text-sm leading-relaxed pr-6">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#B22222] font-semibold font-mono">
                    * Landmark: tiranga building, Paul Colony, Rithala, Delhi
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.address, "addr")}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                  title="Copy Yard Address"
                >
                  {copiedText === "addr" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Owner Phone */}
              <div className="bg-white border border-gray-200 rounded-sm p-5 flex items-start space-x-4 shadow-sm relative">
                <Phone className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Owner / Proprietor Hotline</p>
                  <p className="text-gray-950 font-display font-black text-lg sm:text-xl font-mono">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#B22222] transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Contact Person: <strong>{COMPANY_INFO.proprietor}</strong> (Anil Chaudhary)
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.phone, "phone")}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                  title="Copy Phone Number"
                >
                  {copiedText === "phone" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Address */}
              <div className="bg-white border border-gray-200 rounded-sm p-5 flex items-start space-x-4 shadow-sm relative">
                <Mail className="w-5 h-5 text-[#B22222] mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Email Inquiries</p>
                  <p className="text-gray-950 font-bold text-sm sm:text-base font-mono">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#B22222] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_INFO.email, "email")}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                  title="Copy Email"
                >
                  {copiedText === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-900 border border-gray-800 rounded-sm p-5 flex items-start space-x-4 shadow-sm text-gray-300">
                <Clock className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">Supply Yard Loading Hours</p>
                  <p className="text-white font-bold text-xs sm:text-sm mt-1">Monday – Saturday: 09:00 AM – 07:00 PM</p>
                  <p className="text-gray-400 text-[11px] mt-1">Sundays: Prior booking/apppointments only (heavy trailers)</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Block: Live Google Map Iframe and travel guidance */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-sm p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-[10px] font-mono text-gray-400 font-bold flex items-center uppercase">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2" />
                Live Yard Map Coordinates
              </span>
              <a
                href="https://maps.google.com/?q=Ram+ji+Electricals,+Khasra+1122,+tiranga+building,+Paul+Colony,+Rithala,+Rohini,+Delhi,+110085"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#B22222] hover:text-red-900 font-bold flex items-center hover:underline uppercase font-mono tracking-wider"
              >
                <span>Open in Maps App ↗</span>
              </a>
            </div>

            {/* Embed Iframe */}
            <div className="w-full h-[320px] rounded-sm overflow-hidden border border-gray-200">
              <iframe
                title="Google Maps"
                src={COMPANY_INFO.gmapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-xs text-gray-500 leading-relaxed font-sans">
              <strong>Directions Note:</strong> We are situated near the <strong>Rithala Metro Station</strong> (Red Line terminus). Head toward Paul Colony, we are located in the <strong>tiranga building (Khasra 1122)</strong> at Ram ji Electricals.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
