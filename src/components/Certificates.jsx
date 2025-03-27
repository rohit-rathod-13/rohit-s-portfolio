import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const certificates = [
    {
      title: "Google Generative AI",
      levels: ["L1", "L2", "L3"],
      category: "AI",
    },
    {
      title: "Azure OpenAI Services",
      levels: ["L2"],
      category: "AI",
    },
    {
      title: "Salesforce AI Associate",
      category: "AI",
    },
    {
      title: "Kore.ai Developer Training",
      category: "Development",
    },
    {
      title: "Prompt Engineering for LLM",
      category: "AI",
    },
    {
      title: "Azure AI Fundamentals",
      category: "AI",
    },
    {
      title: "Google Cloud Associate Engineer",
      category: "Cloud",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const categories = ["AI", "Development", "Cloud"];

  const filteredCertificates = selectedCategory
    ? certificates.filter((cert) => cert.category === selectedCategory)
    : certificates;

  return (
    <section id="certificates" className="certificates">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      <div className="category-filters">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`category-filter ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="certificates-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className={`certificate-card ${cert.category.toLowerCase()}`}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{cert.title}</h3>
              {cert.levels && (
                <div className="certificate-levels">
                  {cert.levels.map((level, idx) => (
                    <span key={idx} className="level-badge">
                      {level}
                    </span>
                  ))}
                </div>
              )}
              {cert.category && (
                <div className="category-badge">{cert.category}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Certificates;
