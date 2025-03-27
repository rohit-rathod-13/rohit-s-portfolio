import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import RohitPhoto from "../assets/images/RohitPhoto.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm <span className="highlight-name">Rohit Rathod</span>, a passionate AI Engineer & Data Scientist specializing in Generative AI, Chatbots, ML, NLP, and scalable AI solutions that drive innovation and business growth..
          </motion.p>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
        >
          <div className="image-container">
            <img src={RohitPhoto} alt="Rohit Rathod" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
