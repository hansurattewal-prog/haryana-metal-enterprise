import { Cpu, Scale, Settings, Flame, Layers } from "lucide-react";
import { MACHINERY_DETAILS, COMPANY_INFO } from "../data";

export default function Infrastructure() {
  const stats = [
    { label: "Rolling Speed", value: "30 m/min" },
    { label: "Profile Capacity", value: "500 MT/Mo" },
    { label: "Thickness Limits", value: "0.35-0.8mm" },
    { label: "Length Precision", value: "+ / - 1mm" }
  ];

  return (
    <section id="machinery" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Interactive Machinery specifications visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 sm:p-8 text-gray-800 relative overflow-hidden shadow-sm">
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <span className="text-[#B22222] text-xs font-mono font-bold uppercase tracking-wider">
                    HEAVY MACHINERY SPECS
                  </span>
                  <p className="font-display font-black text-xl mt-1 text-gray-900">
                    PLC "Rapid Machine" Roll Former
                  </p>
                </div>

                <div className="space-y-4">
                  {MACHINERY_DETAILS.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-xs pb-2.5 border-b border-gray-205 border-gray-200 last:border-0 last:pb-0">
                      <span className="text-gray-500 font-mono">{spec.name}</span>
                      <span className="text-gray-900 font-bold font-mono bg-white border border-gray-200 px-2.5 py-1 rounded-sm">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simulated Roll Stages Indicator panel */}
                <div className="bg-white rounded-sm p-4 border border-gray-200">
                  <p className="text-[10px] font-mono text-gray-400 font-bold uppercase mb-2">AUTO PLC FEED CONTROL</p>
                  <div className="flex items-center justify-between space-x-2">
                    <span className="text-[10px] bg-red-50 text-[#B22222] border border-[#B22222]/20 px-2 py-1 rounded-sm font-bold">Stage A: Uncoil</span>
                    <span className="text-gray-400 font-mono text-xs">→</span>
                    <span className="text-[10px] bg-sky-50 text-sky-800 border border-sky-250 border-sky-200 px-2 py-1 rounded-sm font-bold">Stage B: Roll</span>
                    <span className="text-gray-400 font-mono text-xs">→</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded-sm font-bold font-mono">Stage C: Shear</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Block - Description & Copywriting */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center space-x-1 bg-sky-50 text-sky-800 rounded-sm px-2.5 py-1 text-xs font-bold font-mono uppercase tracking-wider">
              <span>MANUFACTURING EDGE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-none">
              State-of-the-Art <span className="text-[#B22222]">"Rapid Machine"</span> Heavy-Duty Sheet Rollers.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Equipped with advanced <strong className="font-semibold text-gray-900">"Rapid Machine"</strong> heavy-duty profile sheet rollers to deliver precise, high-durability color-coated corrugated sheets tailored to your warehouse blueprints. We feed raw coils directly into our computerized line, stamping zero-gap corrugated peaks that match standard ridge parameters.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              This automated system drastically minimizes dimensional errors, and produces custom spans up to <strong className="font-semibold text-gray-900">45 feet long</strong> in a single batch. By eliminating splicing joints and gaps, our profile sheets keep your warehouse structures completely leak-proof even in torrential rainstorms.
            </p>

            {/* Quick Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-sm text-center">
                  <span className="block text-xl sm:text-2xl font-display font-black text-[#B22222]">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase mt-1 tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Sub-Badges representing machinery elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <Cpu className="w-5 h-5 text-[#B22222] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">PLC Automation Feed</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Inputs exact mathematical lengths for precise sheet batches, minimizing fabrication waste.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Scale className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Strict Quality Tolerances</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Ensures accurate profile depth and gauge thickness corresponding to Indian Standards.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
