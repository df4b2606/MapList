import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

import "./styles_navbar.css";
export default function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  const mainPage = () => {
    navigate("/");
  };

  //Checking JWT Expiration and Updating State
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Navbar expand="lg" className="fixed-top navbar ">
      <Container className="navbar-container">
        <Navbar.Brand className="brand-container" href="/home">
          <img
            src="../../public/logo.png" // 替换为你的 logo 路径
            height="30" // 设置 logo 高度
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="brand-text">MapList</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-nav">
            {" "}
            <Nav.Link
              href="/home"
              className={`nav-item ${
                currentPath === "/home" || currentPath === "/" ? "active" : ""
              }`}
            >
              Places
            </Nav.Link>
            <Nav.Link
              href="/lists"
              className={`nav-item ${currentPath === "/lists" ? "active" : ""}`}
            >
              Lists
            </Nav.Link>
            <Nav.Link
              href="/map"
              className={`nav-item ${currentPath === "/map" ? "active" : ""}`}
            >
              Map
            </Nav.Link>
          </Nav>
          <div className="login-components">
            {user ? (
              <NavDropdown
                title={user.name}
                id="user-dropdown"
                align="end"
                className="user-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  主页设置
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>登出</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button
                variant="outline-light"
                onClick={() => navigate("/auth")}
                className="login-button"
              >
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
