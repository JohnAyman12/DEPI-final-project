import React from "react";
import SubHeader from "../SubHeader/SubHeader.jsx";
import "../../Style.scss";

const Development = () => {
  const topics = [
    { name: "Python Courses", url: "https://www.udemy.com/topic/python/" },
    { name: "Data science", url: "https://www.udemy.com/topic/data-science/" },
    { name: "JAva script", url: "https://www.udemy.com/topic/javascript/" },
    { name: "react", url: "https://www.udemy.com/topic/react/" },
    {
      name: "webdevelopment",
      url: "https://www.udemy.com/topic/web-development/",
    },
    {
      name: "machine learning",
      url: "https://www.udemy.com/topic/machine-learning/",
    },
    { name: "java", url: "https://www.udemy.com/topic/java/" },
    { name: "Unity", url: "https://www.udemy.com/topic/unity/" },
  ];

  return (
    <div className="category">
      <SubHeader />
      <div className="container">
        <h1 className="ud-heading">Development Courses</h1>
        <h2>Courses to get you started </h2>
        <p>Explore courses from experienced, real-world experts.</p>

        <div className="courses-container">
          <div className="course">
            <a
              href="https://www.udemy.com/course/become-a-certified-web-developer/"
              target="blank"
            >
              <img src="./D/D1.png" alt="CCNA course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/ajax-development/"
              target="blank"
            >
              <img src="./D/D2.png" alt="ccnpa course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/thecompletewebdeveloper/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./D/D3.png" alt="intro to fiber optic capling course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/the-theory-behind-electronics-a-beginners-guide/?couponCode=JUST4U02223"
              target="blank"
            >
              <img
                src="./D/D4.png"
                alt="the-theory-behind-electronics course"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/information-technology-essentials/?couponCode=JUST4U02223"
              target="blank"
            >
              <img
                src="./D/D5.png"
                alt="information-technology-essentials course"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/unix-for-beginners/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./D/D6.png" alt="unix-for-beginners course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/plc-programming-from-scratch/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./D/D7.png" alt="plc-programming-from-scratch source" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/sql-server-fast-track-intro-to-queries/?couponCode=JUST4U02223"
              target="blank"
            >
              <img
                src="./D/D8.png"
                alt="sql-server-fast-track-intro-to-queries source"
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
};

export default Development;
