import { Shield, Truck, Award, Users } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function About() {
  const highlights = [
    {
      icon: <Shield className="w-5 h-5 text-[#B22222]" />,
      title: "Genuine Brand Guarantee",
      desc: "Authorized wholesale dealers of premium Apollo, Tata, JSW, and AMNS metals. Every bundle is delivered with original mill test certificates."
    },
    {
      icon: <Truck className="w-5 h-5 text-sky-600" />,
      title: "Delhi-NCR Fleet Delivery",
      desc: "Supported by our dedicated transport networks across Delhi, Gurgaon, Noida, Faridabad, and Sonipat for prompt zero-delay logistics."
    },
    {
      icon: <Award className="w-5 h-5 text-[#B22222]" />,
      title: "The \"Jind Wale\" Trust",
      desc: "Rooted in Jind, Haryana, we bring uncompromising integrity, transparent weight counts, and sincere business ethics to the Delhi capital region."
    },
    {
      icon: <Users className="w-5 h-5 text-sky-600" />,
      title: "Warehouse Contractors Specialization",
      desc: "Decades of deep partnership with heavy-duty shed constructors, manufacturing workshops, PEB layout builders, and commercial developers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Detailed Narrative and Proprietor Signature card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1 bg-red-50 text-[#B22222] rounded-sm px-2.5 py-1 text-xs font-bold font-mono uppercase tracking-wider">
              <span>ESTABLISHED STEEL EXCELLENCE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-none">
              Serving Warehouse Contractors & Industrial Builders with <span className="text-[#B22222]">Premium Steel</span> Solutions.
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              At <strong className="font-semibold text-gray-900">Haryana Metal Enterprises [Jind Wale]</strong>, we are prominent traders, manufacturers, and turnkey contractors recognized for supplying the finest grade structural pipes and profile roofing solutions. We help businesses lay strong foundations and erect highly secure warehouses using top-grade alloy steel.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Led by our proprietor <strong className="font-semibold text-gray-800">{COMPANY_INFO.proprietor}</strong>, we run fully customized rolling profiling setups in Delhi, enabling fast on-demand production of pre-painted corrugated sheets. Whether you need heavy-grade MS round pipes for heavy steel columns or custom profile roofing sheets for large-scale factory hangars, HME has you covered.
            </p>

            {/* Proprietor detail box */}
            <div className="bg-gray-50 border-l-4 border-[#B22222] p-5 rounded-sm shadow-sm">
              <p className="font-medium text-gray-700 italic">
                "We measure our success through the structural integrity of the warehouses we cover. We provide complete transparency in steel grades, gauge thicknesses, and honest weights. That is our Jind Wale signature."
              </p>
              <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                <div>
                  <h4 className="font-display font-bold text-gray-950">{COMPANY_INFO.proprietor}</h4>
                  <p className="text-xs text-gray-500 font-mono">Founder & Proprietor, Haryana Metal Enterprises</p>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-[#B22222] hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider font-mono px-4 py-2 rounded-sm transition-all"
                  >
                    Call {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Graphic Grid of USP points */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-black text-gray-950 text-xl tracking-tight">
              Why Engineers & Contractors Choose Us
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-gray-50 hover:bg-gray-100 rounded-sm border border-gray-200 transition-all flex items-start space-x-4 shadow-sm"
                >
                  <div className="p-2 bg-white rounded-sm border border-gray-200 shadow-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
