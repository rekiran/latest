import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import linkedinIcon from "../assets/NavBar/linkedinIcon.svg";
import githubIcon from "../assets/NavBar/githubIcon.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className="wrapper-navbar">
      <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Kiran</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className={
                  activeLink == "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/skills"
                className={
                  activeLink == "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="/project"
                className={
                  activeLink == "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/kiran-one22/"
                  target="_blank"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
                <a href="https://github.com/rekiran/" target="_blank">
                  <img src={githubIcon} alt="" />
                </a>
              </div>
              <button className="" onClick={() => console.log("connect")}>
                <span>Let's connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
