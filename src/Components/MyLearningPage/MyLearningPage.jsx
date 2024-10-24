import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import coursesDB from "../../data/coursesDB"; // Adjust path as needed
import usersDB from "../../data/usersDB"; // Adjust path as needed
import "./MyLearningPage.scss";

const MyLearningPage = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);
  const currentUser = usersDB[0]; // Example: Get the current user (adjust as necessary)

  return (
    <div className="my-learning-container">
      <h2>My Learning</h2>
      {currentUser.coursesEnrolled.length > 0 ? (
        <ul className="course-list">
          {currentUser.coursesEnrolled.map((courseId) => {
            const course = coursesDB.find((course) => course.id === courseId); // Correctly look for course by ID
            return (
              <li key={course.id} className="course-item">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="course-image"
                />
                <h3>{course.title}</h3>
                <p>Instructor: {course.instructor}</p>
                <p>Price: £{course.price}</p>
                {course.originalPrice && (
                  <p className="original-price">
                    Original Price: £{course.originalPrice}
                  </p>
                )}
                <p>
                  Rating: {course.rating} ({course.reviews} reviews)
                </p>
                <Link to={`/course/${course.id}`} className="view-details-link">
                  View Course
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="no-courses-message">
          You haven't enrolled in any courses yet. Start exploring courses and enroll today!
        </p>
      )}
    </div>
  );
};

export default MyLearningPage;
