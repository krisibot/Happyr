"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-happyr text-white pt-24 pb-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Happyr
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Africa's Liberation Stack
          </p>
          <p className="text-xl opacity-95 mb-8 leading-relaxed">
            One App. One Wallet. One Continent.
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop the $35–50B annual extraction. Happyr puts Africa's wealth back in African hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-happyr-purple hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition group">
              Get Started
              <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>

          {/* Hero Image - E-bike fleet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16"
          >
            <img
              src="/images/happyr-fleet-cape-town.jpg"
              alt="Happyr electric motorbike fleet in Cape Town"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
