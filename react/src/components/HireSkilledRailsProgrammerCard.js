import React from 'react';
import '../css/HireSkilledRailsProgrammerCard.css';

const cardData = [
  {
    title: 'Database Efficiency',
    image: 'assets/img/HireSkilledRailsProgrammerCard/Dedicated_1.svg',
    description: 'Every Rails developer at Devsinc is familiar with the top databases and experienced in writing through an active record to manage queries.',
  },
  {
    title: 'Trained for Future',
    image: 'assets/img/HireSkilledRailsProgrammerCard/Dedicated_1.svg',
    description: 'We are experts in delivering projects based on Ruby on Rails concepts and principles and fully completing the gaps.',
  },
  {
    title: 'Domain Expertise',
    image: 'assets/img/HireSkilledRailsProgrammerCard/Dedicated_1.svg',
    description: 'Our Rails development team has an in-depth knowledge of any domain to ensure smooth project delivery.',
  },
 
];

function HireSkilledRailsProgrammerCard() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        {cardData.map((card, index) => (
          <div key={index} className='col-lg-4'>
            <div className="card custom-card rounded mb-5">
              <div className="card-body">
                <div>
                  <img src={card.image} className="img-fluid w-25" alt={card.image} />
                </div>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-text mb-5">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HireSkilledRailsProgrammerCard;
