import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import ButtonStyle from "./ButtonStyle";
import axios from "axios";

const AppNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [hireTalentData, setHireTalentData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fectchHireTalentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/navbar-hire-talent"
        );
        setHireTalentData(response.data);
        console.log(hireTalentData);
      } catch (err) {
        console.log("Error fetching Hire Talent Data : " + err.message);
      }
    };
    fectchHireTalentData();
  }, []);

  const handleNavbarToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="text-dark">
      <div className="container-lg ">
        <Navbar.Brand as={NavLink} to="/" className="m-0 p-0">
          <img
            src="assets/img/arwa-logo.png"
            alt="Arwa Logo"
            className="w-50"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" onClick={handleNavbarToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#34A8D6"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="navbarNav"
          className={`${isNavCollapsed ? "collapse" : ""}`}
        >
          <ul className="navbar-nav ms-auto">
            {hireTalentData.map((category, index) =>
              category.categories.length !== 0 ? (
                <li
                  className="nav-item dropdown-toggle d-flex align-items-center justify-content-between me-md-4 py-md-4 position-relative"
                  key={index}
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to={``}
                    className={`nav-link text-dark p-0  custom-border ${
                      openDropdown === index ? "border-bottom-active" : ""
                    } ${openDropdown === index ? "border-li-hover" : ""}`}
                    id={`nav-dropdown-${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    {category.mainCategory}
                  </NavLink>
                  {openDropdown === index && (
                    <div className="position-absolute z-100">
                      <div id="parent-dropdown" className="dropdown-menu bg-transparent shadow-none border-0 my-md-4 p-0 show m-0 ">
                        <div
                          className="bg-light shadow-1 my-md-3 rounded-2 py-1"
                          id="nested-dropdown"
                        >
                          {category.categories.map((option, optionIndex) => (
                            <>
                              {option.fields.length !== 0 ? (
                                <div
                                  key={optionIndex}
                                  className="dropdown-item d-flex dropdown-toggle justify-content-between align-items-center p-2"
                                  onMouseEnter={() =>
                                    setOpenNestedDropdown(index + optionIndex)
                                  }
                                  onMouseLeave={() =>
                                    setOpenNestedDropdown(null)
                                  }
                                >
                                  {option.category}
                                  {openNestedDropdown ===
                                    index + optionIndex && (
                                    <div className="position-absolute start-100">
                                      <div className={`dropdown-menu show  m-0 py-1 m-40 border-0 ${option.fields[0].link}`}>
                                        {option.fields.map(
                                          (nestedOption, nestedOptionIndex) => (
                                            <NavLink
                                              key={nestedOptionIndex}
                                              to={nestedOption.link}
                                              className="dropdown-item p-2 text-dark"
                                            >
                                              {nestedOption.field}
                                            </NavLink>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <NavLink
                                  to={option.link}
                                  className="text-dark dropdown-item"
                                >
                                  {option.category}
                                </NavLink>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <NavLink
                  to={"/" + category.link}
                  className="text-dark me-4 p-0 custom-border single-category-item"
                >
                  {category.mainCategory}
                </NavLink>
              )
            )}
          </ul>
          <div className="navbar-nav  my-2">
            <ButtonStyle title={"Hire an Expert"} onClickFunction={() => navigate("/contact")} />
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
