"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PriceCalculator() {
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceOptions = [
    { id: 'cut_master', name: 'Master Cut & Style', price: 150 },
    { id: 'cut_senior', name: 'Senior Cut & Style', price: 120 },
    { id: 'color_balayage', name: 'Signature Balayage', price: 280 },
    { id: 'color_root', name: 'Root Touch Up', price: 110 },
    { id: 'treatment_keratin', name: 'Keratin Smoothing', price: 300 },
    { id: 'treatment_olaplex', name: 'Olaplex Rebuild', price: 65 },
    { id: 'extensions_tape', name: 'Tape-In Extensions', price: 400 },
    { id: 'styling_event', name: 'Event Styling / Blowout', price: 85 }
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const total = selectedServices.reduce((sum, id) => {
    const service = serviceOptions.find(s => s.id === id);
    return sum + (service ? service.price : 0);
  }, 0);

  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left: Info */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
              09 // Transparency
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Estimate <br/> Your Visit
            </h2>
            <p className="text-xl text-black/70 font-medium mb-10 max-w-md">
              Select the services you're interested in to get an instant estimate. Final pricing may vary based on consultation and specific hair needs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="sticky top-32 p-10 bg-black text-white"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Estimated Total</h3>
            <div className="text-7xl font-black tracking-tighter mb-8">
              ${total}
            </div>
            <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              Book These Services
            </button>
          </motion.div>
        </div>

        {/* Right: Calculator List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {serviceOptions.map((service, index) => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => toggleService(service.id)}
                className={`p-6 border cursor-pointer transition-all duration-300 flex justify-between items-center ${
                  isSelected ? 'border-black bg-black text-white' : 'border-black/10 bg-white hover:border-black/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 border flex items-center justify-center transition-colors ${
                    isSelected ? 'border-white bg-white' : 'border-black/30'
                  }`}>
                    {isSelected && (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-lg md:text-xl font-bold uppercase tracking-wide">{service.name}</span>
                </div>
                <span className="text-lg font-medium">+${service.price}</span>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
