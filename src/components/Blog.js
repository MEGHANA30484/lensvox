import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import projectImage from "./images/Blog-bg.jpeg";
import Generative from "./images/gen-bg.png";
import Vision from "./images/vision-bg.jpg";
import Audio from "./images/audio-bg.jpg";


function Blog() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const blogCategories = [
    { title: "Introduction" },
    { title: "What is Artificial Intelligence?" },
    {
      title: "Applications of AI",
      children: [
        { title: "Healthcare" },
        { title: "Finance" },
        { title: "Transportation" },
        { title: "Retail and E-commerce" },
        { title: "Entertainment" },
        { title: "Manufacturing" },
      ],
    },
    { title: "The Future of AI" },
    { title: "Conclusion" },
  ];

  return (
    <div className="Blog">
      <div className="Blog-container" style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Blog Categories</h2>
          <ul className="tree">
            {blogCategories.map((category, index) => (
              <li key={index}>
                {category.children ? (
                  <>
                    <span
                      className="toggle"
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? "▼" : "►"}
                    </span>
                    {category.title}
                    {expanded[index] && (
                      <ul>
                        {category.children.map((child, idx) => (
                          <li key={idx}>{child.title}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  category.title
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="Blog-content">
          <h1>
            The Rise of Artificial Intelligence: Revolutionizing the World
          </h1>
          <ul>
            <li>
              <p>
                Artificial Intelligence (AI) is no longer a futuristic
                concept—it is actively shaping the world around us.From the way
                we interact with technology to how businesses operate, AI is
                creating profound changes across industries and daily life. But
                what exactly is AI, and how is it transforming the world? In
                this blog, we'll explore the key aspects of AI, its
                applications, and its impact on society.
              </p>
            </li>
          </ul>
          <h2>What is Artificial Intelligence?</h2>
          <ul>
            <li>
              <p>
                AI refers to the simulation of human intelligence in machines
                that are programmed to think, learn, and solve problems. It
                encompasses various fields, including machine learning, natural
                language processing, robotics, and computer vision. Unlike
                traditional software that operates based on predefined
                instructions, AI systems have the ability to learn from data,
                adapt to new situations, and improve over time without human
                intervention.
              </p>
            </li>
          </ul>
          <h2>Applications of AI</h2>
          <p>
            The versatility of AI is evident in its broad range of
            applications:Here are some key areas where AI is making a
            significant impact:
          </p>
          <ul>
            <li>
              Healthcare: AI assists in diagnosing diseases Healthcare AI is
              revolutionizing healthcare by assisting doctors in diagnosing
              diseases, predicting patient outcomes, and discovering new drugs.
              Machine learning algorithms analyze vast amounts of medical data
              to identify patterns and provide insights, leading to more
              accurate and efficient treatments. AI-powered systems are also
              improving personalized medicine by tailoring treatments based on
              individual genetic profiles.
            </li>
            <li>
              Finance: AI is used for fraud detection, algorithmic trading, and
              risk assessment. AI algorithms analyze transaction patterns to
              detect anomalies, making it easier to spot fraudulent activities
              in real-time. Additionally, AI is enhancing customer service in
              banking, with chat bots and virtual assistants providing 24/7
              support for customers.
            </li>

            <li>
              Transportation: AI is central to autonomous vehicles, enabling
              cars, trucks, and drones to navigate and make decisions without
              human intervention. Self-driving cars use AI to process data from
              sensors, cameras, and radar to safely navigate roads. AI is also
              optimizing traffic management, reducing congestion, and improving
              public transportation systems.
            </li>

            <li>
              Retail and E-commerce: AI enhances customer experience by offering
              personalized recommendations based on browsing and purchase
              history. E-commerce platforms like Amazon and Netflix leverage AI
              to analyze customer preferences and provide tailored product or
              media suggestions. Additionally, AI is used in supply chain
              management to predict demand and optimize inventory levels.
            </li>
            <li>
              {" "}
              Entertainment AI has transformed entertainment by enabling content
              personalization and enhancing the creation process. In the gaming
              industry, AI is used to design intelligent non-playable characters
              (NPCs) that adapt to player behavior. In film and television, AI
              tools assist in editing, special effects, and scriptwriting, while
              AI-generated music and art are gaining recognition in the creative
              world.
            </li>
            <li>
              Manufacturing AI-driven automation is reshaping manufacturing
              industries by improving production efficiency, reducing costs, and
              ensuring quality control. Robots powered by AI can perform
              repetitive tasks with high precision and speed, while predictive
              maintenance systems monitor equipment health to prevent failures
              before they happen.
            </li>
          </ul>
          <h2>The Future of AI</h2>
          <ul>
            <li>
              <p>
                As AI continues to evolve, its potential seems limitless. Future
                advancements are likely to see AI systems that are even more
                autonomous, intelligent, and capable of solving complex
                problems. The rise of general AI, a form of AI that can perform
                any intellectual task that a human can, is still a distant goal,
                but researchers are making strides toward this ambitious
                objective
              </p>
            </li>
            <li>
              <p>
                However, with great power comes great responsibility. The rapid
                development of AI raises ethical concerns about privacy, job
                displacement, and the potential misuse of AI systems. As AI
                becomes more integrated into society, there will be a growing
                need for regulation, transparency, and accountability in how AI
                is designed and implemented.
              </p>
            </li>
          </ul>
          <h2>Conclusion</h2>
          <p>
          Artificial Intelligence is undoubtedly one of the most exciting and
          transformative technological advancements of our time. Its potential
          to enhance industries, improve quality of life, and solve global
          challenges is immense. Yet, the rise of AI also calls for careful
          consideration of its ethical implications and societal impact. As we
          move forward, it's essential to strike a balance between innovation
          and responsibility to ensure that AI continues to serve humanity in a
          positive way.

          </p>

          {/* Cards Section */}
          <div className="card-container">
            <div id="Generative" className="card" style={{ width: "18rem" }}>
              <img
                src={Generative}
                className="card-img-top"
                alt="Generative AI"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/generative">Generative Text Summarization</Link>
                </h5>
                <p className="card-text">
                  A project focused on creating concise and coherent summaries
                  from large volumes of text using advanced NLP techniques.
                </p>
              </div>
            </div>

            <div id="Vision" className="card" style={{ width: "18rem" }}>
              <img src={Vision} className="card-img-top" alt="Vision" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/Vision">Vision-based Quality Control</Link>
                </h5>
                <p className="card-text">
                  An AI solution for automating quality control processes in
                  manufacturing using computer vision to detect defects and
                  anomalies.
                </p>
              </div>
            </div>

            <div id="Audio" className="card" style={{ width: "18rem" }}>
              <img src={Audio} className="card-img-top" alt="Audio" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/Audio">
                    Audio Signal Processing for Noise Reduction
                  </Link>
                </h5>
                <p className="card-text">
                  A proof of concept aimed at improving audio quality by
                  reducing background noise through sophisticated signal
                  processing algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
