import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ButtonStyle from "./ButtonStyle";
import "../css/Navbar.css";
import NavBarDropDownCard from "./NavBarDropDownCard";
import axios from "axios";

const CustomNavDropdown = ({ title }) => {
  const [hireTalent, setHireTalent] = useState([]);
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const fetchTalentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/navbar-hire-talent"
        );
        setHireTalent(response.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/navbar/about"
        );
        setAbout(response.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchTalentData();
    fetchAboutData();
  }, []);

  return (
    <ul className="navbar-nav">
      {title === "Hire a Talent" ? (
        <Dropdown className="position-static">
          <Dropdown.Toggle
            className="fs-6 border-0 text-capitalize"
            color="primary"
            caret
          >
            {title}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="container">
              <div className="row g-2 my-4">
                {hireTalent.map((e, i) => (
                    <div
                      className="col-md-4 col-sm-6 col-lg-3 mb-3 mb-lg-0"
                      key={i}
                    >
                      <div className="list-group list-group-flush">
                        <h1 className="fs-5 text-uppercase ps-2 text-primary">
                          {e.name}
                        </h1>
                        {e.cetagory.map((item, j) => (
                          <Dropdown.Item key={j} className="mb-3 p-0 text-dark">
                            <Link
                              to={item.link}
                              className="dropdown-item border-transparent p-0 border-start border-5 rounded-2 ps-2 py-1"
                            >
                              <NavBarDropDownCard data={item} />
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown className="position-static">
          <Dropdown.Toggle
            className="fs-6 border-0 text-capitalize"
            color="primary"
            caret
          >
            {title}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="container">
              <div className="row g-2 my-4">
                {about.map((e, i) => (
                  <div
                    className="col-md-6 col-sm-6 col-lg-4 mb-3 mb-lg-0"
                    key={i}
                  >
                    <div className="list-group list-group-flush">
                      {e.cetagory.map((item, j) => (
                        <Dropdown.Item key={j} className="mb-3 p-0 text-dark">
                          <Link
                            to={item.link}
                            className="dropdown-item border-transparent p-0 border-start border-5 rounded-2 ps-2 py-1"
                          >
                            <NavBarDropDownCard data={item} />
                          </Link>
                        </Dropdown.Item>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </ul>
  );
};

const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar fixed-top"
      id="topbar"
    >
      <Container>
        <Navbar.Brand className="ps-0" href="/">
          <img src="assets/img/arwa-logo.png" alt="" className="w-50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="gap-2 align-items-center">
            <CustomNavDropdown title="Hire a Talent" />
            <CustomNavDropdown title="About" />
            <ButtonStyle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
