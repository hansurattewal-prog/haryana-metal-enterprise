import { Phone, CheckCircle2, Award, Zap } from "lucide-react";
import { BRANDS, COMPANY_INFO } from "../data";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white border-b border-gray-200"
    >
      {/* Absolute Geometric Visual Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden md:block">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-50 border border-[#B22222]/30 rounded-sm px-4 py-1.5 text-xs font-bold text-[#B22222] tracking-wide uppercase font-mono">
              <Zap className="w-3.5 h-3.5" />
              <span>Reliable Industrial Supply Yard - Delhi</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none">
              Strength in <span className="text-[#B22222]">Every Structure.</span> Quality in <span className="text-sky-600">Every Sheet.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed">
              Haryana Metal Enterprises [Jind Wale] supplies premium heavy-gauge MS Pipes, pre-painted corrugated Galvalume profile sheets, and end-to-end warehouse structural solutions. Backed by state-of-the-art roll-forming machinery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#B22222] flex-shrink-0" />
                <span className="text-sm font-medium">Authorized Brands Trade Partners</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span className="text-sm font-medium">"Rapid Machine" Precision Lengths</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span className="text-sm font-medium">Warehouse Blueprints Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#B22222] flex-shrink-0" />
                <span className="text-sm font-medium">Wholesale Rate & Bulk Invoicing</span>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onQuoteClick}
                className="bg-[#B22222] hover:bg-red-800 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                Instant Price Quote
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Specs</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-sm transition-all text-center flex items-center justify-center space-x-2 border border-gray-300"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                <span>Call Owner</span>
              </a>
            </div>

            {/* Quick Prop/Owner Card */}
            <div className="pt-4 border-t border-gray-200 max-w-xl">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gray-100 border border-gray-200 flex items-center justify-center font-display font-bold text-[#B22222]">
                  AC
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">PROPRIETOR</p>
                  <p className="text-sm font-bold text-gray-800">{COMPANY_INFO.proprietor}</p>
                </div>
                <div className="h-4 w-px bg-gray-200 hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase">DELHI YARD LOCATION</p>
                  <p className="text-sm font-bold text-gray-700">Rithala, Delhi-85</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Structural Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-gray-50 border border-gray-200 rounded-sm p-6 sm:p-8 shadow-md">
              {/* Profile Sheet Showcase Simulation */}
              <div className="absolute top-4 right-4 bg-sky-100 text-sky-850 border border-sky-200 rounded-sm px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                Heavy Profile
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-mono text-[10px] text-gray-400 font-bold uppercase">STRUCTURAL SPECIFICATION PREVIEW</p>
                  <h3 className="font-display font-extrabold text-xl text-gray-900 mt-1">Galvalume Ridge Cap Profile</h3>
                </div>

                {/* Simulated Steel Profile Graphic */}
                <div className="bg-white rounded-sm p-5 border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
                  {/* Wavy Galvanized Steel sheet profile in CSS */}
                  <div className="w-full flex justify-between items-center opacity-70 mb-8 mt-2">
                    {[1, 2, 3, 4, 5, 6].map((wave) => (
                      <div key={wave} className="flex flex-col items-center space-y-1">
                        <div className="w-10 h-3 bg-[#B22222] rounded-t-sm transform skew-x-12" />
                        <div className="w-10 h-1 bg-sky-500 rounded-full" />
                      </div>
                    ))}
                  </div>

                  <div className="w-full border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex justify-between text-[11px] font-mono text-gray-500">
                      <span>Width: 1070mm overall</span>
                      <span>Pitch: 200mm c/c</span>
                    </div>
                  </div>

                  {/* Absolute watermark of certified standards */}
                  <div className="absolute bottom-2 right-2 flex space-x-1 text-[8px] font-mono text-gray-400">
                    <span>IS-15965 COMPLIANT</span>
                  </div>
                </div>

                {/* Spec Indicators list */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-mono">AUTHORIZED TRADING</span>
                    <span className="text-gray-900 font-bold bg-gray-100 px-2 py-0.5 rounded-sm">Apollo, Tata, JSW</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-mono">THICKNESS GRADES</span>
                    <span className="text-emerald-700 font-bold">0.35mm to 10.0mm</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-mono">SUPPLY RADIUS</span>
                    <span className="text-gray-900 font-bold bg-gray-100 px-2 py-0.5 rounded-sm">Delhi-NCR, Haryana</span>
                  </div>
                </div>

                {/* Instant Action */}
                <button
                  onClick={onQuoteClick}
                  className="w-full bg-[#111827] hover:bg-gray-800 text-white py-3 rounded-sm font-bold text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Configure Custom Length 🛠️
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Brand partners Trust badging bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-xs font-mono uppercase tracking-widest text-center mb-8 font-bold">
            AUTHORISED SUPPLY & FABRICATION PARTNERS
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {BRANDS.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-sm p-5 transition-all text-center flex flex-col justify-center items-center h-28"
              >
                <span className="font-display font-black text-2xl tracking-widest text-gray-800 hover:text-[#B22222] transition-colors">
                  {brand.logoText}
                </span>
                <span className="text-[#B22222] text-[10px] font-mono font-bold uppercase mt-1">
                  {brand.name}
                </span>
                <p className="text-gray-500 text-[10px] font-sans mt-1 line-clamp-1">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
