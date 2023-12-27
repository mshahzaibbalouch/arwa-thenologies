import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
          We're here to provide personalized solutions, answer your queries, and explore collaboration opportunities. Reach out today for a seamless partnership experience.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              <i class="ri-map-pin-line"></i>
                <h4>Location:</h4>
                <p>Arwa Technologies, Mahram Wala Lodhrān, Lodhran, Punjab</p>
              </div>
              <div className="email">
              <i class="ri-mail-line"></i>
                <h4>Email:</h4>
                <p>azhar@arwatechnologies.com</p>
              </div>
              <div className="phone">
              <i class="ri-smartphone-line"></i>
                <h4>Call:</h4>
                <p>+92 344 4645568</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.9722365897237!2d71.63426707428022!3d29.517168443362443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9f9f030eeacf%3A0x526a0ef063a1aab3!2sArwa%20Technologies%20%7C%20Innovate%20%26%20Tech%20Service%20Provider!5e0!3m2!1sen!2s!4v1687631639727!5m2!1sen!2s"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen
              ></iframe>
              
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
