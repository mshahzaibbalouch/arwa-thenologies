import React from 'react';

const data = [
  {
    title: 'Hire Skilled Rails Programmer ',
    image: 'assets/img/SeoExpert/hire-now.jpg',
    description: 'Discover our versatile, skilled and experienced Rails developers with various skills that are suitable according to your business needs. Our Rails development services stood outstanding for being object-oriented to facilitate data safety, tool integration and innovative designs.',
    reasons: [
      'Complex SaaS Systems',
      'eCommerce Websites',
      'Payment Gateways',
      'Custom API development',
      'Social Networking Projects',
      'Custom Platforms and Portals',
    ],
  },

];

function HireSkilledRailsProgrammer() {
  return (
    <div>
      <div>
        <div className='container'>
          {data.map((item, index) => (
            <div className='row mt-5' key={index}>
              <div className='col-lg-6'>
                <img src={item.image} alt='hire-now' className='img-fluid' />
              </div>
              <div className='col-lg-6'>
                <div className='ms-md-5'>
                  <h2>{item.title}</h2>
                  <div className="">
                    <p>{item.description}</p>
                    <p>Following are the reasons to choose Ruby on Rails:</p>
                    <ul>
                      {item.reasons.map((reason, reasonIndex) => (
                        <li key={reasonIndex}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HireSkilledRailsProgrammer;
