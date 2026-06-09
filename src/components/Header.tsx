import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Landmark, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../data";

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Upper Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Owner: <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors font-mono font-medium">{COMPANY_INFO.phoneDisplay}</a></span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400 font-medium">Jind Wale - Delhi Yard Wholesale Prices</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="navbar"
        className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 border-b-4 border-[#B22222] ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 md:top-0"
            : "bg-white py-4 md:bg-white/95 border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Branding - Clean Minimalism */}
          <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => scrollToSection("hero")}>
            <div className="bg-[#B22222] text-white font-display font-black text-lg px-2.5 py-1.5 tracking-tighter rounded-sm shadow-sm">
              HME
            </div>
            <div className="flex flex-col">
              <h1 className="font-display font-extrabold text-[#111827] text-base leading-none tracking-tight md:text-lg">
                HARYANA METAL ENTERPRISES
              </h1>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-[#B22222] font-semibold mt-1">
                {COMPANY_INFO.suffix} — Industrial Steel Experts
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-[#B22222] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              About Spec
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-600 hover:text-[#B22222] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Materials Stock
            </button>
            <button
              onClick={() => scrollToSection("machinery")}
              className="text-gray-600 hover:text-[#B22222] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("quote-estimator")}
              className="text-gray-600 hover:text-[#B22222] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Estimator
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-[#B22222] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Verify Direct Yard
            </button>
          </nav>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2.5 rounded-sm lg:hidden block transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-[#B22222]" />
            </a>
            <button
              onClick={onQuoteClick}
              className="hidden sm:flex items-center space-x-2 bg-[#B22222] hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* Mobile Toggle Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 hover:bg-gray-200 p-2.5 rounded-sm lg:hidden text-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 bg-white border-b border-slate-200 shadow-xl px-4 py-6 flex flex-col space-y-4 lg:hidden pt-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-800 font-semibold text-base transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-800 font-semibold text-base transition-colors"
            >
              Offerings & Brands
            </button>
            <button
              onClick={() => scrollToSection("machinery")}
              className="text-left py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-800 font-semibold text-base transition-colors"
            >
              Our Infrastructure
            </button>
            <button
              onClick={() => scrollToSection("quote-estimator")}
              className="text-left py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-800 font-semibold text-base transition-colors"
            >
              Interactive Estimator
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-800 font-semibold text-base transition-colors"
            >
              Contact Owner
            </button>
            <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="w-full text-center bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center space-x-2"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full text-center bg-slate-950 text-white hover:bg-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Owner Directly</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
