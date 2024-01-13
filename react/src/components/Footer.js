import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2 footer-contact">
              <img
                src="assets/img/arwa-logo-footer.png"
                alt=""
                className="w-25  text-center ms-5 d-flex align-items-center justify-content-center"
              />
              <p>
                Arwa Technologies, Mahram Wala
                <br /> Lodhran, Lodhran, Punjab
                <br />
                <strong>Phone:</strong> +92 300 6771046
                <br />
                <strong>Email:</strong> supports@arwatechnologies.com <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-2 footer-links">
              <h4>Useful Links</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i> <a href=".">Home</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>
                  <a href=".">About us</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>
                  <a href=".">Services</a>
                </li>
                <li className="list-group-item pb-2 p-0 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>
                  <a href=".">Terms of service</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>
                  <a href=".">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-2 footer-links">
              <h4>Our Services</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href=".">AI & CHAT GPT</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href=".">Web Design</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href=".">Web Development</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href=".">Product Management</a>
                </li>
                <li className="list-group-item p-0 pb-2 border-0 bg-transparent">
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href=".">Marketing</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-2 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Join our vibrant community and engage with fellow technology
                enthusiasts. Let's connect and grow together.
              </p>
              <div className="social-links mt-3">
                <a href="." className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="." className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="." className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="." className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/arwa-technologies/mycompany/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom py-1">
            <div className="copyright text-center w-100 text-white m-0">
              &copy; Copyright{" "}
              <strong>
                <span>
                  <Link to="/" className="text-white">
                    {" "}
                    Arwa Technologies{" "}
                  </Link>
                </span>
              </strong>
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
