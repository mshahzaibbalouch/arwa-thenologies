import React from 'react';


function ParentComponent({ title, description }) {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='text-center '>
            <h3>{title}</h3>
            <p className='my-3'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
