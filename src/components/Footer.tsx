import { Landmark, Phone, Mail, FileText, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main link panel columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-900 pb-10">
          
          {/* Brand/Logo col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-[#B22222] text-white font-display font-black text-lg px-2.5 py-1 rounded-sm flex items-center">
                <Landmark className="w-4 h-4 mr-1" />
                <span>HME</span>
              </div>
              <div>
                <h4 className="font-display font-black text-base tracking-tight text-white leading-none">
                  Haryana Metal Enterprises
                </h4>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#B22222] font-black mt-1">
                  {COMPANY_INFO.suffix}
                </p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 max-w-sm font-sans font-light leading-relaxed">
              Serving warehouse contractors, industrial factory builders, and residential storage yards with high-grade MS tubes, pre-painted corrugated Galvalume roofing sheets, and full turnkey shed construction across the Delhi National Capital Region.
            </p>
          </div>

          {/* Quick links col */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-white font-display font-black text-xs uppercase tracking-wider font-mono">
              Quick Portals
            </h5>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#about" className="hover:text-white transition-colors">About Proprietor</a>
              <a href="#products" className="hover:text-white transition-colors">Core Offerings & Specifications</a>
              <a href="#machinery" className="hover:text-white transition-colors">"Rapid Machine" Automation</a>
              <a href="#quote-estimator" className="hover:text-white transition-colors">Price Quote Calculator</a>
            </div>
          </div>

          {/* Sourcing credentials col */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-white font-display font-black text-xs uppercase tracking-wider font-mono">
              Authorized Trading
            </h5>
            <p className="text-xs text-gray-500 leading-relaxed">
              We process high-grade steel sheets and pipes sourced directly from partner factories of JSW, AMNS India, Apollo Pipes, and Tata Steel.
            </p>
            <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-gray-400 bg-gray-900 p-2.5 rounded-sm border border-gray-800 max-w-max">
              <FileText className="w-3.5 h-3.5 text-[#B22222] mr-1" />
              <span>GST Registered: Haryana Metal Enterprises</span>
            </div>
          </div>

        </div>

        {/* Footnote copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
          <div className="text-gray-500 font-light text-center sm:text-left">
            <p>&copy; {currentYear} Haryana Metal Enterprises [Jind Wale]. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600 mt-1">
              Developed securely under Delhi-NCR industrial trading terms. Proprietor: {COMPANY_INFO.proprietor}.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-sm border border-gray-800 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
            aria-label="Back to top"
          >
            <span className="text-xs font-mono">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B22222]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
