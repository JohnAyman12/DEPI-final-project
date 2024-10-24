import React from "react";
import SubHeader from "../SubHeader/SubHeader.jsx";
import "../../Style.scss";

const Buisness = () => {
  const topics = [
    {
      name: "project-management",
      url: "https://www.udemy.com/topic/project-management/",
    },
    {
      name: "data-modeling",
      url: "https://www.udemy.com/topic/data-modeling/",
    },
    {
      name: "microsoft-power-bi",
      url: "https://www.udemy.com/topic/microsoft-power-bi/",
    },
    {
      name: "business-analysis",
      url: "https://www.udemy.com/topic/business-analysis/",
    },
    { name: "leadership", url: "https://www.udemy.com/topic/leadership/" },
    {
      name: "human-resources",
      url: "https://www.udemy.com/topic/human-resources/",
    },
    {
      name: "business-strategy",
      url: "https://www.udemy.com/topic/business-strategy/",
    },
    { name: "SQL", url: "https://www.udemy.com/topic/sql/" },
  ];

  return (
    <div className="category">
      <SubHeader />
      <div className="container">
        <h1 className="ud-heading">Buisness Courses</h1>
        <h2>Courses to get you started </h2>
        <p>Explore courses from experienced, real-world experts.</p>

        <div className="courses-container">
          <div className="course">
            <a
              href="https://www.udemy.com/course/how-to-budget-and-forecast-for-your-business/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./B/B1.png" alt="CCNA course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/write-less-say-more/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./B/B2.png" alt="ccnpa course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/financialanalysis/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./B/B3.png" alt="intro to fiber optic capling course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/framestorm-your-way-to-success-in-business/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img
                src="./B/B4.png"
                alt="the-theory-behind-electronics course"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/iso-9001-qms-auditor-lead-auditor-course/"
              target="blank"
            >
              <img
                src="./B/B5.png"
                alt="information-technology-essentials course"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/writing-effective-business-emails/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./B/B6.png" alt="unix-for-beginners course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/minute-taking-at-meetings/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img src="./B/B7.png" alt="plc-programming-from-scratch source" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/how-to-negotiate-salary-negotiating-a-raise-or-promotion/?couponCode=MTST7102224B2"
              target="blank"
            >
              <img
                src="./B/B8.png"
                alt="sql-server-fast-track-intro-to-queries source"
              />
            </a>
          </div>
        </div>

        <div className="popular-topics-container">
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
      );
    </div>
  );
};

export default Buisness;
