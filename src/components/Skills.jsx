import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  // Updated category mapping for progress bars
  const getProgressBarClass = (category) => {
    const categoryMap = {
      Programming: "languages",
      "AI & Machine Learning": "data-science",
      "Tools & Frameworks": "frameworks",
      "Cloud & Platforms": "design",
    };
    return categoryMap[category] || "languages";
  };

  const initialSkillsCount = window.innerWidth <= 768 ? 3 : 5;

  const skills = {
    Programming: [
      { name: "Python", proficiency: 90 },
      { name: "Java", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
    ],
    "AI & Machine Learning": [
      { name: "Generative AI", proficiency: 95 },
      { name: "Large Language Models (LLM)", proficiency: 90 },
      { name: "NLP", proficiency: 85 },
      { name: "Machine Learning", proficiency: 95 },
      { name: "Deep Learning", proficiency: 85 },
      { name: "Prompt Engineering", proficiency: 95 },
      { name: "EDA", proficiency: 85 },
      { name: "Data Visualization", proficiency: 95 },
      { name: "Vector DB", proficiency: 85 },
    ],
    "Cloud & Platforms": [
      { name: "AWS (Bedrock,SageMaker, Lambda, API Gateway)", proficiency: 90 },
      { name: " Azure", proficiency: 70 },
      { name: "Google Cloud Platform", proficiency: 70 },
      { name: "ChatGPT", proficiency: 95 },
      { name: "Kore.ai", proficiency: 90 },
      { name: "Dataiku", proficiency: 80 },
      { name: "Knime", proficiency: 80 },
      { name: "Jupyter Notebook", proficiency: 95 },
    ],
    "Tools & Frameworks": [
      { name: "Google Generative AI Studio", proficiency: 75 },
      { name: "Azure Cloud", proficiency: 70 },
      { name: "Streamlit", proficiency: 95 },
      { name: "OpenSearch", proficiency: 95 },
    ],
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skills-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{category}</h3>
            <div
              className={`skill-list ${
                expandedCategories[category] ? "expanded" : ""
              }`}
            >
              <ul>
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    style={{
                      display:
                        !expandedCategories[category] &&
                        index >= initialSkillsCount
                          ? "none"
                          : "block",
                    }}
                  >
                    <div className="skill-name">
                      {item.name}
                      <span className="proficiency">{item.proficiency}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <motion.div
                        className={`progress-bar ${getProgressBarClass(
                          category
                        )}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.1,
                        }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            {items.length > initialSkillsCount && (
              <motion.button
                className="view-more-btn"
                onClick={() => toggleCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {expandedCategories[category] ? "View Less" : "View More"}
              </motion.button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
