import React from "react";
import SubHeader from "../SubHeader/SubHeader.jsx";
import "../../Style.scss";
function Design() {
  const topics = [
    {
      name: "blender",
      url: "https://www.udemy.com/topic/blender/",
    },
    {
      name: "figma",
      url: "https://www.udemy.com/topic/figma/",
    },
    {
      name: "photoshop",
      url: "https://www.udemy.com/topic/photoshop/",
    },
    { name: "autocad", url: "https://www.udemy.com/topic/autocad/" },
    { name: "canva", url: "https://www.udemy.com/topic/canva/" },
    {
      name: "illustrator",
      url: "https://www.udemy.com/topic/adobe-illustrator/",
    },
    {
      name: "3d-modeling",
      url: "https://www.udemy.com/topic/3d-modeling/",
    },
    {
      name: "UX",
      url: "https://www.udemy.com/topic/user-experience-design/",
    },
  ];
  return (
    <div className="category">
      <SubHeader />

      <div className="container">
        <h1 className="ud-heading">Design Courses</h1>
        <h2>Courses to get you started </h2>
        <p>Explore courses from experienced, real-world experts.</p>

        <div className="courses-container">
          <div className="course">
            <a
              href="https://www.udemy.com/course/ultimate-guide-to-ux/"
              target="blank"
            >
              <img
                src="./Design/des1.png"
                alt="Simple Strategy for Swing Trading the Stock Market"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/learn-real-world-ux/"
              target="blank"
            >
              <img
                src="./Design/des2.png"
                alt="The Complete Introduction To Accounting and Finance"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/user-experience-design-fundamentals/"
              target="blank"
            >
              <img
                src="./Design/des3.png"
                alt="Options Trading Basics (3-Course Bundle)"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/course-introduction-to-game-localization/"
              target="blank"
            >
              <img
                src="./Design/des4.png"
                alt="Business Analysis: Working with Use Cases"
              />
            </a>
          </div>

          <div className="course">
            <a href="https://www.udemy.com/course/learn-latex/" target="blank">
              <img
                src="./Design/des5.png"
                alt="Understand Banks & Financial Markets"
              />
            </a>
          </div>

          <div className="course">
            <a href="https://www.udemy.com/course/soundscaping/" target="blank">
              <img
                src="./Design/des6.png"
                alt="Stock Market Investing for Beginners"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/"
              target="blank"
            >
              <img
                src="./Design/des7.png"
                alt="Personal Financial Well-Being"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/wordpress-for-beginners-course/"
              target="blank"
            >
              <img
                src="./Design/des8.png"
                alt="The Complete Guide to the Global Capital Markets"
              />
            </a>
          </div>
        </div>

        <div
          className="popular-topics-container"
          style={{ marginBottom: "1rem" }}
        >
          <h2>Popular topics</h2>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <a
                key={index}
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topic-item"
              >
                {topic.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
