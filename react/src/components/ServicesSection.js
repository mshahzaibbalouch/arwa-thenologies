import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon w-25">
                <img src='assets/img/UXlogo.png' className='w-75' alt='' />
              </div>
              <h4><a href=".">UI/UX DESIGN</a></h4>
              <p>Unlock the power of exceptional user experiences. Our team combines creativity and expertise to deliver intuitive designs that exceed expectations.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
            <div className="icon w-25">
                <img src='assets/img/web.png' className='w-75' alt='' />
              </div>
              <h4><a href=".">WEB DEVELOPMENT</a></h4>
              <p>Unleash the potential of the web with our cutting-edge web  development services. We create dynamic and intuitive applications that deliver seamless user experiences across devices.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
            <div className="icon w-25">
                <img src='assets/img/qa.png' className='w-75' alt='' />
              </div>
              <h4><a href=".">QUALITY ASSURANCE</a></h4>
              <p>Eliminate risks and ensure reliability. Our quality assurance experts employ cutting-edge techniques to identify and resolve software defects, ensuring smooth operations for your business.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
            <div className="icon w-25">
                <img src='assets/img/ai.png' className='w-75' alt='' />
              </div>
              <h4><a href=".">AI & CHAT GPT</a></h4>
              <p>Stay ahead with AI-driven insights. Our AI and Chat GPT services leverage machine learning algorithms to analyze data, predict trends, and provide valuable business intelligence for informed decision-making.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
