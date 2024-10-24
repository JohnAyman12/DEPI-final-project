import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signInSchema } from "../../Utils/Zod/schema.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useGetUsers } from "../../Utils/Hooks/GetUsersData.jsx";
import { useEnrollment } from "../../context/EnrollmentContext"; // Import the Enrollment context
import "./_SignIn.scss";
// import "./LoginPage.scss";

export default function SignIn() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrentUser } = useEnrollment(); // Access the context
  const [e, setError] = useState("");

  const { data: users, isLoading, isError, error } = useGetUsers();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate the input data using the schema
      const res = signInSchema.parse(data);

      // Find the matching user from the fetched users data
      const matchedUser = users.find(
        (user) => user.email === res.email && user.password === res.password
      );
      console.log(matchedUser);
      if (matchedUser) {
        // No need for localStorage, we set the context directly
        setIsLoggedIn(true);
        setCurrentUser(matchedUser); // Update the context with the matched user

        toast.success("Sign In successful");

        // Navigate to profile after successful login
        navigate("/");
      } else {
        toast.error("Invalid email or password");
        setError("Invalid email or password");
      }
    } catch (error) {
      if (error.errors) {
        // Handle validation errors
        error.errors.forEach((err) => toast.error(err.message));
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="SignIn">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Login</h2>
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/SignUp")}
          >
            Do not have an account?
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </form>
      )}
      <Toaster />
    </section>
  );
}
