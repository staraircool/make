"use client";

import { motion } from "framer-motion";

export default function ClientTestimonials() {
  const reviews = [
    {
      author: "Twee Phan",
      time: "5 months ago",
      text: "From the moment I walked in — everyone was welcoming, attentive, and genuinely friendly. They paid incredible attention to detail, making sure I was comfortable and happy throughout the entire appointment. My hair stylist was Quan...",
      initials: "TP",
      color: "bg-orange-800"
    },
    {
      author: "Toby Horne",
      time: "3 months ago",
      text: "Duc va duyen was the person who worked on my hair and he and the rest of the staff were absolutely lovely! They were very thorough and made sure that I was ok the entire time as it was the first time dyeing my hair...",
      initials: "TH",
      color: "bg-emerald-800"
    },
    {
      author: "Jimmy Nguyen",
      time: "5 months ago",
      text: "The color turned out beautiful: a clean silverish blue with perfectly blended black tips. The attention to detail was obvious, and the final look was even better than what I had imagined. Highly recommend 4AM Hair Studio...",
      initials: "JN",
      color: "bg-blue-800"
    }
  ];

  const highlights = [
    { topic: "hair dyeing", count: 133 },
    { topic: "enthusiastic consultation", count: 49 },
    { topic: "attention to detail", count: 35 },
    { topic: "hair extensions", count: 31 },
    { topic: "keratin treatment", count: 19 },
    { topic: "balayage", count: 10 },
  ];

  return (
    <section className="w-full bg-white text-black py-32 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-black/50 mt-1">
              Google Reviews
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Client <br/> Experiences
          </h2>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
            <span className="ml-2 text-xl font-bold">5.0</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {highlights.map((h, i) => (
              <div key={i} className="px-4 py-2 rounded-full border border-black/10 bg-black/5 text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                <span>{h.topic}</span>
                <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full">{h.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border border-black/10 p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{review.author}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-black/50 font-medium">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-black/80 font-medium leading-relaxed italic mb-8 relative">
                  <span className="text-4xl text-black/20 absolute -top-4 -left-2">"</span>
                  {review.text}
                  <span className="text-4xl text-black/20 absolute -bottom-6 ml-1">"</span>
                </p>
              </div>
              <div className="pt-6 border-t border-black/10 mt-auto">
                <a href="#" className="text-sm font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors flex items-center gap-2">
                  Read full review on Google 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
