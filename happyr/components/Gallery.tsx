"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const gallery = [
    {
      src: "/images/happyr-drivers-earning.jpg",
      alt: "Happyr drivers earning on the platform",
      title: "Drivers Earn 90%+",
      description: "Direct payment to wallets. No middleman taking a cut.",
    },
    {
      src: "/images/happyr-solar-battery-stations.jpg",
      alt: "Solar-powered battery swap stations",
      title: "Energy Sovereignty",
      description: "Solar panels powering the network. Clean energy, clean profit.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Infrastructure designed from the ground up for the continent's unique challenges and opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={item.src}
                alt={item.alt}
                className="relative w-full rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
