import React from "react";

function StatCard({ title, value }) {
  return (
    <div style={styles.statCard}>
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div style={styles.courseCard}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><b>Duration:</b> {course.duration}</p>
      <p><b>Enrolled:</b> {course.enrolled} students</p>
    </div>
  );
}

function Achievement({ text }) {
  return (
    <div style={styles.achievement}>
      🏆 {text}
    </div>
  );
}

function App() {
  const courses = [
    {
      title: "React Basics",
      description: "Components, props, state",
      duration: "4 Weeks",
      enrolled: 320
    },
    {
      title: "JavaScript Fundamentals",
      description: "Core JS & logic building",
      duration: "6 Weeks",
      enrolled: 450
    },
    {
      title: "Web Development",
      description: "HTML, CSS, UI design",
      duration: "5 Weeks",
      enrolled: 380
    }
  ];

  const achievements = [
    "1200+ students trained",
    "300+ certificates issued",
    "150+ students placed",
    "50+ real-world projects completed"
  ];

  const totalEnrolled = courses.reduce(
    (sum, course) => sum + course.enrolled,
    0
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1>EduStart Dashboard</h1>
        <p>Learning Platform Overview</p>
      </div>

      {/* Stats */}
      <div style={styles.statsContainer}>
        <StatCard title="Total Courses" value={courses.length} />
        <StatCard title="Total Enrolled" value={totalEnrolled} />
        <StatCard title="Achievements" value={achievements.length} />
      </div>

      {/* Courses */}
      <h2 style={styles.sectionTitle}>Courses</h2>
      <div style={styles.courseContainer}>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Achievements */}
      <h2 style={styles.sectionTitle}>Achievements</h2>
      <div style={styles.achievementContainer}>
        {achievements.map((a, index) => (
          <Achievement key={index} text={a} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    padding: "20px"
  },
  header: {
    backgroundColor: "#1f2933",
    color: "white",
    padding: "20px",
    borderRadius: "8px"
  },
  statsContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "20px"
  },
  statCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    flex: 1,
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  sectionTitle: {
    marginTop: "30px",
    color: "#1f2933"
  },
  courseContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap"
  },
  courseCard: {
    backgroundColor: "#ffffff",
    padding: "15px",
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  achievementContainer: {
    marginTop: "10px"
  },
  achievement: {
    backgroundColor: "#ffffff",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
  }
};

export default App;
