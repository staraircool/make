"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-32 pb-10 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between gap-20">
        
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none"
          >
            4AM <br/>
            <span className="text-accent">Studio</span>
          </motion.h2>

          <div className="mt-16 flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2">Location</h4>
              <p className="text-2xl font-medium text-black">
                29 Nguyễn Văn Tráng<br />
                District 1, Ho Chi Minh City<br />
                Vietnam
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-2">Booking</h4>
              <a href="#" className="text-2xl font-bold text-accent hover:text-black transition-colors relative inline-block group">
                hello@4amhairstudio.com
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </div>
            
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/4amhairstudio/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                IG
              </a>
              <a href="#" className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                FB
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.531238965868!2d106.6912389146222!3d10.769186992326558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e8f85f543%3A0x4c278fb12f45ea0f!2s29%20Nguy%E1%BB%85n%20V%C4%83n%20Tr%C3%A1ng%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh%2C%20Qu%E1%BA%ADn%201%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-32 flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest text-black/40">
        <p>&copy; {new Date().getFullYear()} 4AM HAIR STUDIO.</p>
        <p>Awwwards Winning Execution</p>
      </div>
    </footer>
  );
}
