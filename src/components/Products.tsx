import { useState } from "react";
import { Check, ClipboardList, Package, Layers, Hammer, Info } from "lucide-react";
import { PRODUCTS, PROFILE_COLORS, COMPANY_INFO } from "../data";

interface ProductsProps {
  onQuoteClick: (productTitle: string) => void;
}

export default function Products({ onQuoteClick }: ProductsProps) {
  const [activeProductTab, setActiveProductTab] = useState(PRODUCTS[0].id);
  const [selectedSheetColor, setSelectedSheetColor] = useState(PROFILE_COLORS[0]);

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductTab) || PRODUCTS[0];

  return (
    <section id="products" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#B22222] text-xs font-mono font-bold uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-sm border border-[#B22222]/20">
            PRODUCTS & SERVICES PORTFOLIO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Our Core Industrial Metal Offerings
          </h2>
          <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed">
            We provide comprehensive metal raw materials and fabrication support optimized for warehouse contracting, high-strength industrial structures, and residential roofing yards in Delhi-NCR.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCTS.map((prod) => {
            const isActive = prod.id === activeProductTab;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductTab(prod.id)}
                className={`px-5 py-3 rounded-sm font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
                  isActive
                    ? "bg-[#B22222] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {prod.title.split(" (")[0]}
              </button>
            );
          })}
        </div>

        {/* Active Product Deep Dive Display */}
        <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Product description and interactive features */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-gray-100 text-[#B22222] rounded-sm border border-gray-200">
                    {activeProductTab === "ms-pipes" && <Package className="w-5 h-5" />}
                    {activeProductTab === "profile-sheets" && <Layers className="w-5 h-5" />}
                    {activeProductTab === "tin-sheds" && <ClipboardList className="w-5 h-5" />}
                    {activeProductTab === "warehouse-contracting" && <Hammer className="w-5 h-5" />}
                  </span>
                  <p className="text-[10px] font-mono font-bold text-[#B22222] uppercase tracking-widest">
                    TECHNICAL SHOWCASE
                  </p>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 tracking-tight">
                  {activeProduct.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Grid of details: Features vs Core Apps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y border-gray-200">
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 flex items-center">
                    <span className="w-1.5 h-3 bg-[#B22222] mr-2" />
                    Key Quality Attributes
                  </h4>
                  <ul className="space-y-2">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 flex items-center">
                    <span className="w-1.5 h-3 bg-sky-600 mr-2" />
                    Primary Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {activeProduct.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-sky-500 mr-2 mt-2 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price / Quote Trigger */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">PRICING DISCLOSURE</span>
                  <p className="text-sm font-semibold text-gray-700">
                    Bulk wholesale rates on direct inquiry.
                  </p>
                </div>
                <button
                  onClick={() => onQuoteClick(activeProduct.title)}
                  className="bg-[#B22222] hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
                >
                  Request Bulk Prices & Sizes
                </button>
              </div>
            </div>

            {/* Product specifications table context */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-sm p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-gray-950 text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                  <span>Specifications Grid</span>
                  <span className="text-[9px] font-mono font-bold text-[#B22222] bg-red-50 border border-[#B22222]/20 rounded-sm px-1.5 py-0.5">IS COMPLIANT</span>
                </h4>

                <div className="space-y-3.5">
                  {activeProduct.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-start text-xs border-b border-gray-200 pb-2 last:border-0 leading-relaxed">
                      <span className="text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-bold text-right max-w-[200px]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Display visual background block representing manufacturing context */}
              <div className="mt-6 p-4 bg-white border border-gray-200 rounded-sm flex items-center space-x-3 shadow-sm">
                <Info className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <p className="text-[11px] text-gray-500 leading-normal">
                  All MS steel elements are verified against metallurgical weight limits prior to truck dispatch in Delhi.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* HIGH-FIDELITY INTERACTIVE COLOR SELECTION SIMULATOR */}
        <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 text-gray-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Simulation Text Panel */}
            <div className="lg:col-span-6 space-y-6">
              <span className="bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider inline-block font-bold">
                Interactive Color Profiling Simulator 🎨
              </span>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-950 tracking-tight">
                Preview Custom Prepainted Profiles
              </h3>

              <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                Haryana Metal Enterprises uses high-grade lead-free paints on JSW Pragati and Tata Bluescope PPGL coils. Pick static colors below to inspect visual coating specs and solar heat deflection parameters.
              </p>

              {/* Color Picking Grid */}
              <div className="grid grid-cols-2 gap-3">
                {PROFILE_COLORS.map((colorObj, cIdx) => {
                  const isSelected = selectedSheetColor.name === colorObj.name;
                  return (
                    <button
                      key={cIdx}
                      onClick={() => setSelectedSheetColor(colorObj)}
                      className={`p-3.5 rounded-sm text-left border transition-all cursor-pointer flex items-center space-x-3 ${
                        isSelected
                          ? "bg-gray-50 border-[#B22222] shadow-sm"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: colorObj.code }}
                      />
                      <div className="truncate">
                        <p className="text-xs font-bold text-gray-900 leading-none">{colorObj.name}</p>
                        <p className="text-[10px] text-gray-400 font-mono mt-1">{colorObj.code}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Profile graphic Preview with selected color */}
            <div className="lg:col-span-6">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-sm border border-gray-200">
                
                {/* Wavy Corrugated simulation container */}
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 font-bold uppercase">
                    <span>VISUAL CORRUGATION PREVIEW</span>
                    <span>ACTIVE SHEET COLOR</span>
                  </div>
                  <div className="h-28 bg-white border border-gray-205 border-gray-200 rounded-sm flex items-center justify-around px-4 relative overflow-hidden group">
                    
                    {/* Sheet wave representation */}
                    {[1, 2, 3, 4, 5, 6].map((wavePoint) => (
                      <div
                        key={wavePoint}
                        className="w-8 h-12 rounded-t-sm opacity-90 transition-all duration-500"
                        style={{ backgroundColor: selectedSheetColor.code }}
                      />
                    ))}

                    {/* Gradient highlight represent metallic sheen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Simulated Metadata Info Table on selected paint */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-mono">COLOR IDENTITY:</span>
                    <span className="font-bold text-gray-900 font-mono">{selectedSheetColor.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-mono">POLYESTER RESIN PRIMER:</span>
                    <span className="text-gray-700">20 Microns Topcoat / 5 Microns Backcoat</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-mono">SOLAR REFLECTANCE INDEX (SRI):</span>
                    <span className="text-sky-600 font-bold font-mono">
                      {selectedSheetColor.name.includes("Blue") ? "55 (Cool Roof Spec)" : "32 (Classic Spec)"}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-mono">CORROSION GUARANTEE:</span>
                    <span className="text-emerald-700 font-bold">15 Year Warranty (Weather-sealed)</span>
                  </div>
                </div>

                {/* Specific brand recommendation */}
                <p className="text-[10px] text-gray-400 text-center font-mono mt-4">
                  *Certified for Jind, Haryana & Delhi-NCR weather conditions. Corrugated corrugated sheets rolled on PLC "Rapid Machine".
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
