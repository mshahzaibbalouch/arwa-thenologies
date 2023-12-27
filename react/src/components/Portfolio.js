import React from 'react';

const portfolioData = [
    {
        title: 'KUDO',
        description:
            'Kudo is a Software-as-a-Service (SaaS) platform that offers the latest cloud-based technology —and unparalleled language expertise— so the users can meet globally in their own language.',
        icons: [
            { src: 'assets/img/portfolio/web_icon.svg', alt: 'web_icon', label: 'WEB DEVELOPMENT' },
            { src: 'assets/img/portfolio/qa_icon.svg', alt: 'qa_icon', label: 'WEB DEVELOPMENT' },
        ],
        technologies: [
            { src: 'assets/img/portfolio/ROR.svg', alt: 'ROR', label: 'Ruby On Rails' },
            { src: 'assets/img/portfolio/python.svg', alt: 'Python', label: 'Python' },
            { src: 'assets/img/portfolio/React.svg', alt: 'React', label: 'React' },
            { src: 'assets/img/portfolio/Aws.svg', alt: 'Aws', label: 'Aws' },
        ],
        image: 'assets/img/portfolio/kudo-mockup.svg',
    },
    {
        title: 'KUDO',
        description:
            'Kudo is a Software-as-a-Service (SaaS) platform that offers the latest cloud-based technology —and unparalleled language expertise— so the users can meet globally in their own language.',
        icons: [
            { src: 'assets/img/portfolio/web_icon.svg', alt: 'web_icon', label: 'WEB DEVELOPMENT' },
            { src: 'assets/img/portfolio/qa_icon.svg', alt: 'qa_icon', label: 'WEB DEVELOPMENT' },
        ],
        technologies: [
            { src: 'assets/img/portfolio/ROR.svg', alt: 'ROR', label: 'Ruby On Rails' },
            { src: 'assets/img/portfolio/python.svg', alt: 'Python', label: 'Python' },
            { src: 'assets/img/portfolio/React.svg', alt: 'React', label: 'React' },
            { src: 'assets/img/portfolio/Aws.svg', alt: 'Aws', label: 'Aws' },
        ],
        image: 'assets/img/portfolio/kudo-mockup.svg',
    },
    {
        title: 'KUDO',
        description:
            'Kudo is a Software-as-a-Service (SaaS) platform that offers the latest cloud-based technology —and unparalleled language expertise— so the users can meet globally in their own language.',
        icons: [
            { src: 'assets/img/portfolio/web_icon.svg', alt: 'web_icon', label: 'WEB DEVELOPMENT' },
            { src: 'assets/img/portfolio/qa_icon.svg', alt: 'qa_icon', label: 'WEB DEVELOPMENT' },
        ],
        technologies: [
            { src: 'assets/img/portfolio/ROR.svg', alt: 'ROR', label: 'Ruby On Rails' },
            { src: 'assets/img/portfolio/python.svg', alt: 'Python', label: 'Python' },
            { src: 'assets/img/portfolio/React.svg', alt: 'React', label: 'React' },
            { src: 'assets/img/portfolio/Aws.svg', alt: 'Aws', label: 'Aws' },
        ],
        image: 'assets/img/portfolio/kudo-mockup.svg',
    },
    {
        title: 'KUDO',
        description:
            'Kudo is a Software-as-a-Service (SaaS) platform that offers the latest cloud-based technology —and unparalleled language expertise— so the users can meet globally in their own language.',
        icons: [
            { src: 'assets/img/portfolio/web_icon.svg', alt: 'web_icon', label: 'WEB DEVELOPMENT' },
            { src: 'assets/img/portfolio/qa_icon.svg', alt: 'qa_icon', label: 'WEB DEVELOPMENT' },
        ],
        technologies: [
            { src: 'assets/img/portfolio/ROR.svg', alt: 'ROR', label: 'Ruby On Rails' },
            { src: 'assets/img/portfolio/python.svg', alt: 'Python', label: 'Python' },
            { src: 'assets/img/portfolio/React.svg', alt: 'React', label: 'React' },
            { src: 'assets/img/portfolio/Aws.svg', alt: 'Aws', label: 'Aws' },
        ],
        image: 'assets/img/portfolio/kudo-mockup.svg',
    },
    // Add more objects for each portfolio item
];


function PortfolioItem({ item, index }) {
    const isEvenIndex = index % 2 === 0;
  
    return (
      <div className='row mt-5 portfolio-item'>
        <div className={`col-md-6 ${isEvenIndex ? 'order-md-1' : 'order-md-2'}`}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.icons.map((icon, iconIndex) => (
            <div key={iconIndex} className='d-flex'>
              <div>
                <img src={icon.src} alt={icon.alt} className='img-fluid w-75 ' />
              </div>
              <div className='ps-3 py-3'>
                <h4>{icon.label}</h4>
              </div>
            </div>
          ))}
          <div className='row'>
            <div className='d-flex'>
              {item.technologies.map((tech, techIndex) => (
                <div key={techIndex} className='px-3 text-center'>
                  <img src={tech.src} alt={tech.alt} className='img-fluid' />
                  <p>{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`col-md-6 ${isEvenIndex ? 'order-md-2' : 'order-md-1'}`}>
          <div className='text-center'>
            <img src={item.image} alt={item.title} className='img-fluid w-75' />
          </div>
        </div>
      </div>
    );
  }
  
  function PortfolioComponent() {
    const portfolioLink = '#';
  
    return (
      <div className='container'>
        <a href={portfolioLink} rel='noopener noreferrer' className='portfolio-link'>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </a>
      </div>
    );
  }
  
  export default PortfolioComponent;