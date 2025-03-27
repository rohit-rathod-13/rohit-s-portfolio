import { motion } from "framer-motion";
import React from "react";
import "./Experience.css";

const Experience = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.9,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="experience-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="job-header">
            <h3>Senior AI Engineer</h3>
            <div className="company-duration">
              <span className="company">CREOSPAN</span>
              <span className="duration">FEBRUARY 2025 – CURRENT</span>
            </div>
          </div>
          <motion.ul
            className="responsibilities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.li variants={listItemVariants}>
              <span>
                Led data analysis initiatives to uncover critical Key
                Performance Indicators (KPIs), enabling data-driven
                decision-making and process optimization.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Designed and implemented a Vector Database to efficiently store
                and retrieve embedding data, enhancing the scalability of
                AI-powered search and recommendation systems.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Developed an intelligent ticket triaging system, leveraging
                Generative AI to surface the top most relevant past incidents
                and provide contextual reasoning on why each issue matches the
                new one, significantly improving resolution speed and accuracy.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="job-header">
            <h3>AI Engineer</h3>
            <div className="company-duration">
              <span className="company">STRADIT</span>
              <span className="duration">NOVEMBER 2024 – JANUARY 2024</span>
            </div>
          </div>
          <motion.ul
            className="responsibilities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.li variants={listItemVariants}>
              <span>
                Designed and developed a Generative AI-based Guardrails Testing
                Tool for a USA-based Multi-Asset Management Firm, automating
                evaluation modules for toxicity, bias, politeness, sensitive
                content, hallucination detection, and model integrity.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Spearheaded the integration of Generative AI into guardrail
                testing workflows, enhancing robustness, scalability, and
                reusability of AI frameworks for enterprise-level applications.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="job-header">
            <h3>AI Engineer</h3>
            <div className="company-duration">
              <span className="company">WIPRO</span>
              <span className="duration">MAY 2022 – OCTOBER 2024</span>
            </div>
          </div>
          <motion.ul
            className="responsibilities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.li variants={listItemVariants}>
              <span>
                Innovate and lead in the development of Generative AI models
                producing creative and realistic outputs.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Engineered user-centric conversational flows by integrating NLP
                capabilities.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Developed and deployed a Generative AI-based Marketing Email
                Content Generator for a USA-based Investment Firm, reducing
                manual intervention by 30-40% and driving business growth.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Created a Social Lens Application for Telefonica (German telecom
                firm), correlating customer feedback with product features using
                Generative AI, boosting issue resolution efficiency by 50-60%.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Built ML models using Logistic Regression, SVM, and TensorFlow,
                including a Resume Shortlister Model to streamline candidate
                screening processes.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Conducted exploratory data analysis (EDA) to uncover actionable
                insights and optimized data analysis methodologies for improved
                accuracy and efficiency.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="experience-card"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="job-header">
            <h3>Python Tutor</h3>
            <div className="company-duration">
              <span className="company">EDUCADD</span>
              <span className="duration">APRIL 2021 – APRIL 2022</span>
            </div>
          </div>
          <motion.ul
            className="responsibilities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.li variants={listItemVariants}>
              <span>
                Delivered interactive Python programming sessions for students
                of varying skill levels, developing engaging curricula to
                enhance comprehension.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Provided personalized guidance, evaluated progress, and offered
                constructive feedback to foster effective learning outcomes.
              </span>
            </motion.li>
            <motion.li variants={listItemVariants}>
              <span>
                Cultivated an inclusive learning environment while staying
                updated on industry trends to ensure relevant and practical
                knowledge delivery.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
