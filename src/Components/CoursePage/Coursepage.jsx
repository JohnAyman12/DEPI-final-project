import React from "react";
import { Link } from "react-router-dom";
import coursesDB from "../../assets/CoursesDb/CoursesDB"; // Adjust the import path as necessary
import "./CoursePage.scss"; // Create styles for this component

const CoursePage = () => {
  return (
    <div className="course-page">
      <h1>Available Courses</h1>
      <ul className="course-list">
        {coursesDB.map((course) => (
          <li key={course.id} className="course-item">
            <Link to={`/course/${course.id}`}> {/* Correct link to include course ID */}
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Price: £{course.price}</p>
              <p>Rating: {course.rating} ⭐️</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
