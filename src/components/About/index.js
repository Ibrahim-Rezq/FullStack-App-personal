import { useState } from 'react';

const About = () => {
  const [cssStyle, setCssStyle] = useState({
    color: 'red',
  });

  return (
    <section className='about'>
      <div className='container'>
        <button
          className='btn'
          style={cssStyle}
          onMouseEnter={() => {
            function generateRandomColor() {
              let maxVal = 0xffffff;
              let randomNumber = Math.random() * maxVal;
              randomNumber = Math.floor(randomNumber);
              randomNumber = randomNumber.toString(16);
              let randColor = randomNumber.padStart(6, 0);
              return `#${randColor.toUpperCase()}`;
            }
            const per = Math.floor(Math.random() * 50) + 20;
            const par = Math.floor(Math.random() * 50) + 20;
            setCssStyle({
              color: generateRandomColor(),
              position: 'absolute',
              right: `calc(${per}% )`,
              top: `calc(${par}% )`,
            });
          }}
          onClick={() => {
            console.log('you caut me');
          }}>
          Clickme
        </button>
      </div>
    </section>
  );
};

export default About;
