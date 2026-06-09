import React, { useState, useRef } from "react";
import { Check, Clipboard, PhoneCall, ChevronRight, ChevronLeft, Truck, Send } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface QuoteFormProps {
  initialProductType?: string;
}

export default function QuoteForm({ initialProductType = "" }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [productType, setProductType] = useState(initialProductType || "Color-Coated Profile Roofing Sheets");
  const [thickness, setThickness] = useState("0.50 mm (Heavy Duty)");
  const [estimatedQuantity, setEstimatedQuantity] = useState("1000 - 5000 Sq Ft");
  const [customSpecs, setCustomSpecs] = useState("");
  const [brandPreference, setBrandPreference] = useState("JSW Steel");
  
  // Client contact info
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [deliverySite, setDeliverySite] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedEstimateRef, setGeneratedEstimateRef] = useState("");
  const [validationError, setValidationError] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setValidationError("");
      setStep(step - 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      setValidationError("Please provide at least a name and mobile phone number so we can reach you.");
      return;
    }
    setValidationError("");
    setIsSubmitting(true);
    
    // Simulate API submission / calculation duration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const estimateNum = "HME-Q-" + Math.floor(Math.random() * 90000 + 10000);
      setGeneratedEstimateRef(estimateNum);

      // Scroll form container into view smoothly
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 1200);
  };

  const getWhatsAppReadyText = () => {
    const text = `*New Lead from Haryana Metal Enterprises Website*
Estimate Reference: *${generatedEstimateRef}*
Client Name: *${clientName}*
Phone: *${clientPhone}*
Email: *${clientEmail || "N/A"}*
Delivery Site: *${deliverySite || "N/A"}*

*Requested Specs:*
Product Profile: *${productType}*
Thickness/Gauge: *${thickness}*
Estimated Quantity: *${estimatedQuantity}*
Brand Preference: *${brandPreference}*
Message/Custom Specifications: _${customSpecs || "No extra specs provided"}_`;

    return `https://wa.me/919560019790?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setValidationError("");
    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setDeliverySite("");
    setCustomSpecs("");
  };

  return (
    <div
      ref={formRef}
      id="quote-estimator"
      className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Left pane: Guidelines and steps indicators */}
        <div className="md:col-span-4 bg-gray-900 p-8 text-white flex flex-col justify-between border-r border-gray-800">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest">LEAD ENGINE</p>
              <h3 className="font-display font-black text-xl mt-1 tracking-tight">Configure Quote</h3>
            </div>

            {/* Stepper indicators */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold ${
                  step === 1 ? "bg-[#B22222] text-white" : step > 1 ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400"
                }`}>
                  {step > 1 ? <Check className="w-4 h-4" /> : "1"}
                </span>
                <div>
                  <p className="text-xs font-bold leading-none text-white">Select Product</p>
                  <p className="text-[10px] text-gray-400 mt-1">Choose core category</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold ${
                  step === 2 ? "bg-[#B22222] text-white" : step > 2 ? "bg-emerald-600 text-white" : "bg-gray-800 text-gray-400"
                }`}>
                  {step > 2 ? <Check className="w-4 h-4" /> : "2"}
                </span>
                <div>
                  <p className="text-xs font-bold leading-none text-white">Configure Technicals</p>
                  <p className="text-[10px] text-gray-400 mt-1">Gauge, brand & load</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold ${
                  step === 3 ? "bg-[#B22222] text-white" : "bg-gray-800 text-gray-400"
                }`}>
                  3
                </span>
                <div>
                  <p className="text-xs font-bold leading-none text-white">Contact Info</p>
                  <p className="text-[10px] text-gray-400 mt-1">Delivery yard coordinates</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 hidden md:block">
            <span className="text-[10px] font-mono text-gray-400 flex items-center">
              <Truck className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
              Direct supply from Rithala Yards within 48 hours for bulk contracts.
            </span>
          </div>
        </div>

        {/* Right pane: Interactive fields / Steps form content */}
        <div className="md:col-span-8 p-8 flex flex-col justify-between min-h-[420px]">
          
          {!isSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-6 flex flex-col justify-between h-full">
              
              {/* Step 1: Select Product Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-black text-lg text-gray-900 tracking-tight">Step 1: Choose Steel Offering</h4>
                    <p className="text-xs text-gray-500">Select the direct category you are sourcing for your project blueprints.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Color-Coated Profile Roofing Sheets",
                      "Mild Steel Pipes (Square & Round)",
                      "Industrial Galvanized Tin Sheds",
                      "Turnkey Warehouse Contracting"
                    ].map((productOption) => {
                      const isSelected = productType === productOption;
                      return (
                        <button
                          key={productOption}
                          type="button"
                          onClick={() => setProductType(productOption)}
                          className={`p-4 text-left rounded-sm border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#B22222] bg-red-50 text-gray-900 font-bold shadow-sm"
                              : "border-gray-200 hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <span className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 font-bold">CATEGORY</span>
                          <span className="text-xs sm:text-sm">{productOption}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Configure Technical Specifications */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-black text-lg text-gray-900 tracking-tight">Step 2: Technical Specifications</h4>
                    <p className="text-xs text-gray-500">Provide gauge tolerances or thickness bounds for exact estimation calculation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Gauge/Thickness Selection */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-gray-550 text-gray-500 uppercase">
                        Preferred Thickness
                      </label>
                      <select
                        value={thickness}
                        onChange={(e) => setThickness(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs font-medium focus:border-[#B22222] focus:outline-none"
                      >
                        <option value="0.35 mm (Light Sheds)">0.35 mm (Light Sheds)</option>
                        <option value="0.45 mm (Standard Cladding)">0.45 mm (Standard Cladding)</option>
                        <option value="0.50 mm (Heavy Duty)">0.50 mm (Heavy Duty)</option>
                        <option value="0.60 mm - 0.80 mm (Extreme Grade)">0.60 mm - 0.80 mm (Extreme Grade)</option>
                        <option value="3.0 mm - 10.0 mm (Hollow/Solid MS Pipes)">3.0 mm - 10.0 mm (Hollow/Solid MS Pipes)</option>
                      </select>
                    </div>

                    {/* Brand Preference */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-gray-550 text-gray-500 uppercase">
                        Brand Manufacturer Preference
                      </label>
                      <select
                        value={brandPreference}
                        onChange={(e) => setBrandPreference(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs font-medium focus:border-[#B22222] focus:outline-none"
                      >
                        <option value="JSW Steel">JSW Steel</option>
                        <option value="Tata Steel / Bluescope">Tata Steel / Bluescope</option>
                        <option value="AMNS India">AMNS India</option>
                        <option value="Apollo Tubes">Apollo Tubes</option>
                        <option value="Open to recommendations">Open to recommendations</option>
                      </select>
                    </div>

                    {/* Quantities range */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-gray-550 text-gray-500 uppercase">
                        Estimated Quantities Inbound
                      </label>
                      <select
                        value={estimatedQuantity}
                        onChange={(e) => setEstimatedQuantity(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs font-medium focus:border-[#B22222] focus:outline-none"
                      >
                        <option value="Below 500 Sq Ft / 5 Tons">Below 500 Sq Ft / 5 Tons (Small Site)</option>
                        <option value="500 - 2000 Sq Ft / 10 Tons">500 - 2000 Sq Ft / 10 Tons</option>
                        <option value="2000 - 10000 Sq Ft / 50 Tons">2000 - 10000 Sq Ft / 50 Tons (Mid-scale Hangar)</option>
                        <option value="Above 10000 Sq Ft (Commercial Contract)">Above 10000 Sq Ft (Commercial PEB Contract)</option>
                      </select>
                    </div>

                    {/* Custom messages */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-gray-550 text-gray-500 uppercase">
                        Additional Blueprints / Custom Cuts
                      </label>
                      <input
                        type="text"
                        value={customSpecs}
                        onChange={(e) => setCustomSpecs(e.target.value)}
                        placeholder="e.g., precise profile custom length"
                        className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs focus:outline-none focus:border-[#B22222] placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-black text-lg text-gray-900 tracking-tight">Step 3: Secure Delivery Yard Details</h4>
                    <p className="text-xs text-gray-500">Provide authentic contact lines to enable prompt quotation delivery and callbacks from Anil Chaudhary.</p>
                  </div>

                  {validationError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-[#B22222] text-xs font-bold rounded-sm">
                      {validationError}
                    </div>
                  )}

                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase">
                          Contractor / Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => {
                            setClientName(e.target.value);
                            if (validationError && e.target.value) setValidationError("");
                          }}
                          placeholder="e.g., Harish Sharma"
                          className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs focus:outline-none focus:border-[#B22222] placeholder-gray-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase">
                          Active Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => {
                            setClientPhone(e.target.value);
                            if (validationError && e.target.value) setValidationError("");
                          }}
                          placeholder="e.g., +91 9876543210"
                          className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs focus:outline-none focus:border-[#B22222] placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="e.g., contact@company.com"
                          className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs focus:outline-none focus:border-[#B22222] placeholder-gray-400"
                        />
                      </div>

                      {/* Delivery Site Address */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase">
                          Delivery Site / Storage Yard Address
                        </label>
                        <input
                          type="text"
                          value={deliverySite}
                          onChange={(e) => setDeliverySite(e.target.value)}
                          placeholder="e.g., Okhla Phase-3, Delhi"
                          className="w-full bg-white border border-gray-200 rounded-sm p-2.5 text-xs focus:outline-none focus:border-[#B22222] placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions bar */}
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center bg-white mt-auto">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={step === 1}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer ${
                    step === 1 ? "text-gray-300 pointer-events-none" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </span>
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-gray-950 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm flex items-center space-x-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Continue Specs</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#B22222] hover:bg-red-800 disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm flex items-center space-x-2 cursor-pointer shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Processing Inquiry..." : "Submit Project Specs"}</span>
                  </button>
                )}
              </div>

            </form>
          ) : (
            
            /* Success Response and direct owner WhatsApp route */
            <div className="text-center py-6 space-y-6 animate-fade-in flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-sm flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                
                <h4 className="font-display font-black text-2xl text-gray-900 tracking-tight">Specs Configured Successfully!</h4>
                <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto">
                  Your specifications has been mapped into physical layout estimates. Reference number: <strong className="font-mono text-gray-950 font-bold">{generatedEstimateRef}</strong>.
                </p>
              </div>

              {/* Estimate Summary sheet */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-5 text-left max-w-lg mx-auto space-y-3">
                <p className="text-[10px] font-mono font-bold text-gray-400 uppercase border-b border-gray-200 pb-2 tracking-wider">
                  ESTIMTED BLUEPRINT CONFIG:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <div>
                    <span className="text-gray-500 font-bold font-sans">Product Type:</span>
                    <p className="text-gray-900 font-bold mt-0.5">{productType}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold font-sans">Thickness:</span>
                    <p className="text-gray-900 font-bold mt-0.5">{thickness}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold font-sans">Quantity:</span>
                    <p className="text-gray-900 font-bold mt-0.5">{estimatedQuantity}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold font-sans">Brand Selection:</span>
                    <p className="text-[#B22222] font-bold mt-0.5">{brandPreference}</p>
                  </div>
                </div>
              </div>

              {/* Secondary Lead Actions: WhatsApp or direct call */}
              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <p className="text-[11px] text-gray-400 font-medium">
                  Transmit these specifications to owner <strong>Anil Chaudhary</strong> via WhatsApp for immediate stock clearance rates:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppReadyText()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-sm shadow hover:shadow-lg transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex-1 bg-gray-950 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-sm transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Call Owner</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetForm}
                  className="text-xs text-[#B22222] hover:text-red-900 font-bold font-mono uppercase tracking-widest hover:underline cursor-pointer"
                >
                  Configure Another Estimate
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
