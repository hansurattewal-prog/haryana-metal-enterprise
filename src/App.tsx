import { Landmark, PhoneCall } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Infrastructure from "./components/Infrastructure";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { COMPANY_INFO } from "./data";

export default function App() {
  const handleScrollToQuote = () => {
    const element = document.getElementById("quote-estimator");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Fixed Navigation Header */}
      <Header onQuoteClick={handleScrollToQuote} />

      {/* Main Single Page Sections */}
      <main className="flex-grow pt-14 md:pt-0">
        
        {/* Hero Section with Authorized Badges */}
        <Hero onQuoteClick={handleScrollToQuote} />

        {/* About Us section describing 'Jind Wale' roots */}
        <About />

        {/* Detailed Products and interactive Color Selector */}
        <Products onQuoteClick={handleScrollToQuote} />

        {/* Infrastructure specifications of "Rapid Machine" rollers */}
        <Infrastructure />

        {/* Dynamic Multi-step quotation constructor */}
        <div className="py-20 px-4 bg-slate-100/55 border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-red-700 text-xs font-mono font-bold uppercase tracking-widest bg-red-100 px-2.5 py-1 rounded">
                SECURE LEAD PORTAL
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                Calculate & Secure Direct Wholesale Rates
              </h2>
              <p className="text-slate-500 text-sm">
                Work through our quick 3-step configuration draft. The final output is optimized to be instantly shared via WhatsApp with Anil Chaudhary.
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>

        {/* Contact coordinates, FAQ drawer, and Google Map Pin rendering */}
        <Contact />

      </main>

      {/* Industrial Footer notes */}
      <Footer />

      {/* Minimal Floating Quick WhatsApp and Quick Call Trigger on Mobile Viewports */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 sm:hidden">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="bg-red-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center border border-red-800"
          aria-label="Call Owner"
        >
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
