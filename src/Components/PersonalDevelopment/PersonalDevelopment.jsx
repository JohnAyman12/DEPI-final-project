import React from "react";
import SubHeader from "../SubHeader/SubHeader.jsx";
import "../../Style.scss";

const PersonalDevelopment = () => {
  const topics = [
    {
      name: "life-coaching",
      url: "https://www.udemy.com/topic/life-coaching/",
    },
    { name: "Coaching", url: "https://www.udemy.com/topic/coaching/" },
    {
      name: "personal-productivity",
      url: "https://www.udemy.com/topic/personal-productivity/",
    },
    { name: "memory", url: "https://www.udemy.com/topic/memory/" },
    {
      name: "time-management",
      url: "https://www.udemy.com/topic/time-management/",
    },
    { name: "spirituality", url: "https://www.udemy.com/topic/spirituality/" },
    {
      name: "public-speaking",
      url: "https://www.udemy.com/topic/public-speaking/",
    },
    { name: "mindfulness", url: "https://www.udemy.com/topic/mindfulness/" },
  ];

  return (
    <div className="category">
      <SubHeader />
      <div className="container">
        <h1 className="ud-heading">Personal Development Courses</h1>
        <h2>Courses to get you started </h2>
        <p>Explore courses from experienced, real-world experts.</p>

        <div className="courses-container">
          <div className="course">
            <a
              href="https://www.udemy.com/course/ccna-on-demand-video-boot-camp/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./P/P1.png" alt="CCNA course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/ccnpallinone/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./P/P2.png" alt="ccnpa course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/introduction-to-fiber-optic-cabling/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./P/P3.png" alt="intro to fiber optic capling course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/the-theory-behind-electronics-a-beginners-guide/?couponCode=JUST4U02223"
              target="blank"
            >
              <img
                src="./P/P4.png"
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
                src="./P/P5.png"
                alt="information-technology-essentials course"
              />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/unix-for-beginners/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./P/P6.png" alt="unix-for-beginners course" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/plc-programming-from-scratch/?couponCode=JUST4U02223"
              target="blank"
            >
              <img src="./P/P7.png" alt="plc-programming-from-scratch source" />
            </a>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/sql-server-fast-track-intro-to-queries/?couponCode=JUST4U02223"
              target="blank"
            >
              <img
                src="./P/P8.png"
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

export default PersonalDevelopment;
