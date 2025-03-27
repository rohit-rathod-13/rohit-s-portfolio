import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "GenAI Guardrails Testing Tool",
      technologies: "Generative AI, Python, AWS, Prompt Engineering, NLP, Machine Learning.",
      description:
        "Developed an automated testing framework for a USA-based firm to evaluate Generative AI models for toxicity, bias, hallucination and integrity.",
      // repoUrl: "",
      company: "STRADIT"
    },
    {
      title: "Social Lens Application",
      technologies: "AWS SageMaker, Lambda, API Gateway, Embeddings, OpenSearch, Python, NLP.",
      description:
        "Implemented a Generative AI solution to correlate customer feedback with product features, improving issue resolution efficiency by 50-60%.",
      // repoUrl: "",
      company: "WIPRO (TELEFONICA)"
    },
    {
      title: "Marketing Email Content Generator",
      technologies: "AWS Bedrock, SageMaker, Prompt Engineering, Python, Streamlit, Data Analysis.",
      description:
        "Automated email content creation for a USA-based investment firm, achieving 30-40% business growth through reduced manual effort.",
      // repoUrl: "",
      company: "WIPRO"
    },
    {
      title: "Insurance Chatbot",
      technologies: "NLP, Generative AI, ChatGPT, Python, Web Scraping, Conversational AI",
      description:
        "Built a Generative AI-powered chatbot to enhance response quality and user experience.",
      // repoUrl: "",
      company: "WIPRO (BRITISH ASSURANCE COMPANY)"
    },
    {
      title: "Resume Shortlister Model",
      technologies: "Python, ML, Logistic Regression, Deep Learning, NLP, OCR, RegEx.",
      description:
        "Designed an ML model to screen resumes efficiently, saving time in recruitment processes.",
      // repoUrl: "",
      company: "WIPRO"
    },
    {
      title: "Travel  Assistant Chatbot",
      technologies: "Python, ML, NLP, Kore.ai, Conversational AI, Knowledge Graph Creation.",
      description:
        "Developed a virtual travel concierge for booking flights, cabs, and managing reservations.",
      // repoUrl: "",
      company: "WIPRO"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              "--animation-delay": `${index * 0.1}s`
            }}
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="technologies">
                <span className="tech-label">Technologies:</span>
                <span className="tech-stack">{project.technologies}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {/* <button className="view-demo">View Demo</button> */}
                {/* <button className="view-code">View Code</button> */}
                <button
                  className="view-code">
                  {/* onClick={() => window.open(project.repoUrl, "_blank")}> */}
                  {project.company}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
