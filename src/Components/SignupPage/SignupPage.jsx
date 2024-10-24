import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import { signUpSchema } from "../../Utils/Zod/schema.jsx";
import toast, { Toaster } from "react-hot-toast";
import "./SignupPage.scss";

export default function SignUp() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrentUser } = useContext(EnrollmentContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Disable the submit button while the form is being submitted
      setIsSubmitting(true);

      // Validate form data using Zod
      signUpSchema.parse(data);

      // Check if email already exists
      const emailCheckResponse = await fetch(
        `http://localhost:8080/users/emails/${data.email}`
      );

      if (!emailCheckResponse.ok) {
        throw new Error("Failed to check email existence.");
      }

      const emailExists = await emailCheckResponse.json();

      if (emailExists) {
        toast.error("Email already exists. Please use another one.");
        setIsSubmitting(false);
        return;
      }

      // Proceed with sign-up
      const response = await fetch("http://localhost:8080/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newUser = await response.json();
        toast.success("Sign up successful!");

        setIsLoggedIn(true);
        setCurrentUser(newUser);
        navigate("/");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => toast.error(err.message));
      } else {
        console.error("Error during signup:", error);
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              required
            />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email..." required />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password..."
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number..."
              required
            />
          </div>
          <div className="form-group">
            <input type="number" name="age" placeholder="Age..." required />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              placeholder="Country..."
              required
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Your Image URL..."
            />
          </div> */}
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign Up"}
          </button>

          <div style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
            already have an account?
            <Link to="/login">
              <button className="btn" type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>

        <Toaster />
      </div>
    </div>
  );
}
