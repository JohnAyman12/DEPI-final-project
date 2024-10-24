import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import CoursesDB from "../../assets/CoursesDb/CoursesDB"; // Adjust the import path as necessary
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons
import "./CourseDetails.scss"; // Create styles for this component
import { useGetProducts } from "../../Utils/Hooks/useGetData";

const CourseDetails = () => {
  const { id } = useParams(); // Using ID from URL parameters
  const { data, isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return <p>Loading ....!</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Find the course details based on the ID
  const course = data.find((course) => course.id === parseInt(id)); // Ensure ID is an integer

  // Check if the course exists
  if (!course) {
    return <p>Course not found.</p>;
  }

  // Destructure course details
  const {
    instructor,
    price,
    originalPrice,
    description,
    rate,
    enrolledStudents,
    imageUrl,
    bestseller,
  } = course;

  const navigate = useNavigate();
  const { isLoggedIn, enrolledCourses, addToCart, favorites, toggleFavorite } =
    useContext(EnrollmentContext);

  const handleEnroll = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (
      enrolledCourses.some((enrolledCourse) => enrolledCourse.title === course.title)
    ) {
      toast.error("You are already enrolled in this course.");
      return;
    }

    toast.success(`Successfully enrolled in ${course.title}!`);
  };

  const handleAddToCart = () => {
    addToCart(course);
    toast.success(`${course.title} added to cart!`);
  };

  const isFavorite = favorites.some((fav) => fav.title === course.title);

  const handleFavoriteToggle = () => {
    toggleFavorite(course);
  };

  return (
    <div className="course-details">
      <img src={imageUrl} alt={course.title} className="course-image" />
      <h1 className="course-title">{course.title}</h1>
      <p className="course-instructor">Instructor: {instructor}</p>
      <p className="course-price">
        Price: <span className="current-price">£{price}</span>
        {originalPrice && (
          <span className="original-price"> £{originalPrice}</span>
        )}
      </p>
      <div className="course-rating">
        Rating: {rate} ({enrolledStudents} enrolled)
        {bestseller && <span className="bestseller-badge">Bestseller</span>}
      </div>
      <p className="course-description">{description}</p>
      <div className="course-actions">
        <button className="course-button" onClick={handleEnroll}>
          Enroll Now
        </button>
        <button className="course-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorite ? (
            <AiFillHeart className="heart-icon active" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default CourseDetails;
