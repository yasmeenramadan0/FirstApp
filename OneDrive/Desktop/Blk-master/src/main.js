//main.js
import './main.css';
import React from 'react';
import data from './data.json'
import Footer from './footer';

function Main(){
    const cardStyle = {
        width: '18rem',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        padding: '10px',

      };
    return(
        <>
        <div className='aa'>
    {data.map((section, index) => (
        <div key={index}>
          <h2 className='h2h' >{section.section}</h2>
          <div className='card'>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} style={cardStyle}>
                <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                <div>
                  <h2>{item.name}</h2>
                  <p>{`Price: $${item.price}`}</p>

                  <a href="#" style={{ textDecoration: 'none' }}> 🛒 Order Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      ))}
      </div>
      <Footer></Footer>
        </>
    )
}
export default Main;











