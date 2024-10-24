const coursesDB = [
  {
    id: 1,
    title: "The Complete Python Bootcamp From Zero to Hero",
    instructor: "Jose Portilla",
    price: 399.99, // Numeric value for calculations
    originalPrice: 2099.99,
    rating: 4.6,
    reviews: 519983,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
    bestseller: true,
    enrolledStudents: 2500, // Example of added property
    description: "Learn Python programming from scratch with hands-on projects.",
    content: [
      { type: "video", title: "Introduction to Python", duration: "10:30" },
      { type: "article", title: "Python Basics", duration: "5:00" },
      { type: "video", title: "Control Flow in Python", duration: "15:00" },
      { type: "project", title: "Building a Calculator", duration: "1:00:00" },
      { type: "assignment", title: "Write a Python Function", duration: "30:00" },
      { type: "video", title: "Data Structures", duration: "20:00" },
    ],
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    price: 499.99,
    originalPrice: 2799.99,
    rating: 4.7,
    reviews: 328913,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/2776760_f176_5.jpg",
    bestseller: true,
    enrolledStudents: 1500,
    description: "Become a Python programmer in just 100 days of coding.",
    content: [
      { type: "video", title: "Day 1 - Introduction", duration: "8:00" },
      { type: "article", title: "Understanding Variables", duration: "6:00" },
      { type: "video", title: "Day 10 - Functions", duration: "12:30" },
      { type: "project", title: "Your First Web App", duration: "2:00:00" },
      { type: "assignment", title: "Debugging Practice", duration: "45:00" },
      { type: "video", title: "Final Project Overview", duration: "20:00" },
    ],
  },
  {
    id: 3,
    title: "Automate the Boring Stuff with Python Programming",
    instructor: "Al Sweigart",
    price: 549.99,
    originalPrice: 2799.99,
    rating: 4.6,
    reviews: 114421,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    bestseller: false,
    enrolledStudents: 1200,
    description: "Automate tedious tasks using Python programming.",
    content: [
      { type: "video", title: "What is Automation?", duration: "10:00" },
      { type: "article", title: "Installing Python", duration: "5:00" },
      { type: "video", title: "Writing Your First Script", duration: "15:00" },
      { type: "project", title: "Web Scraping Basics", duration: "1:30:00" },
      { type: "assignment", title: "Automate Your Emails", duration: "1:00:00" },
      { type: "video", title: "Advanced Automation Techniques", duration: "25:00" },
    ],
  },
  {
    id: 4,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    instructor: "Tim Buchalka, Frank J. Mitropoulos",
    price: 429.99,
    originalPrice: 2399.99,
    rating: 4.7,
    reviews: 97625,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/1576854_9aeb.jpg",
    bestseller: true,
    enrolledStudents: 2000,
    description: "Learn C++ programming from scratch and develop your own applications.",
    content: [
      { type: "video", title: "Introduction to C++", duration: "12:00" },
      { type: "article", title: "Setting Up Your Environment", duration: "4:30" },
      { type: "video", title: "Basic Syntax", duration: "18:00" },
      { type: "project", title: "Create a Simple Game", duration: "3:00:00" },
      { type: "assignment", title: "Implement Classes and Objects", duration: "1:30:00" },
      { type: "video", title: "C++ Standard Library", duration: "22:00" },
    ],
  },
  {
    id: 5,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    price: 499.99,
    originalPrice: 2799.99,
    rating: 4.6,
    reviews: 146566,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
    bestseller: false,
    enrolledStudents: 1800,
    description: "Master Data Science and Machine Learning using Python.",
    content: [
      { type: "video", title: "Introduction to Data Science", duration: "14:00" },
      { type: "article", title: "Python for Data Analysis", duration: "7:00" },
      { type: "video", title: "Machine Learning Fundamentals", duration: "25:00" },
      { type: "project", title: "Predictive Modeling", duration: "2:30:00" },
      { type: "assignment", title: "Exploratory Data Analysis", duration: "1:15:00" },
      { type: "video", title: "Deep Learning Overview", duration: "30:00" },
    ],
  },
  {
    id: 6,
    title: "Complete React Native + React Hooks Course",
    instructor: "Denis Panjuta",
    price: 379.99,
    originalPrice: 1999.99,
    rating: 4.5,
    reviews: 45678,
    imageUrl: "https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    bestseller: true,
    enrolledStudents: 800,
    description: "Learn how to build mobile apps using React Native.",
    content: [
      { type: "video", title: "Introduction to React Native", duration: "11:00" },
      { type: "article", title: "Setting Up Your Environment", duration: "5:30" },
      { type: "video", title: "Building Your First App", duration: "20:00" },
      { type: "project", title: "Developing a To-Do App", duration: "2:00:00" },
      { type: "assignment", title: "Using React Hooks", duration: "1:00:00" },
      { type: "video", title: "Publishing Your App", duration: "25:00" },
    ],
  },
];

export default coursesDB;
