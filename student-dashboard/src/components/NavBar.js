import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyle = ({ isActive }) => ({
    margin: "10px",
    padding: "6px 10px",
    textDecoration: "none",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "#007bff" : "transparent",
    borderRadius: "4px",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
      <NavLink to="/" style={linkStyle}>
        Dashboard
      </NavLink>

      <NavLink to="/courses" style={linkStyle}>
        Courses
      </NavLink>

      <NavLink to="/profile" style={linkStyle}>
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
