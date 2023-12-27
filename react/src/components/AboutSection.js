import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Arwa Technologies: Founded in 2021 in Lodhran, we deliver innovative software solutions to empower businesses. Our team creates robust products and provides tailored services for customer success.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i>Experienced in developing web-based applications using .NET Framework</li>
              <li><i className="ri-check-double-line"></i>Experienced in Front-end development using HTML5 / DHTML, Jquery, CSS3, BootStrap5, JS, React.js.</li>
              <li><i className="ri-check-double-line"></i>Experienced in  AI integraytion in Web and Mobile Apps.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">

            <p>
              We have vast years of experience with strong analytical skills and a broad range of computer expertise.
              An excellent problem-solver, able to quickly grasp complex systems and identify opportunities for
              improvements and resolution of critical issues.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
