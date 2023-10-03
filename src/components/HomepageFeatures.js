import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CompanyDetails from './CompanyDetails';
import styles from './HomepageFeatures.module.css';

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


function Feature({ imageIdx, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={require(`@site/static/urban-gardener/${imageIdx}.png`).default} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures() {
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  // Use useEffect to trigger the animation when the component mounts
   useEffect(() => {
    setShowCompanyDetails(true);
  }, []);

  const [one, two, three] = shuffle(Array.from(Array(12).keys()));
  const FeatureList = [
    {
      imageIdx: one,
      title: 'Urban Greening',
      description: (
        <>
          <p>
             "Greenscape" transforms concrete landscapes into lush, green environments, 
             enhancing air quality and providing a haven for urban wildlife.
          </p>
        </>
      ),
    },
    {
      imageIdx: two,
      title: 'Community Participation',
      description: (
        <p>
           Residents, schools, and businesses collaborate to design, set up, 
           and maintain these green spaces, fostering a sense of ownership and community pride.
          {" "}
        </p>
      ),
    },
    {
      imageIdx: three,
      title: 'Sustainability',
      description: (
        <p>
           By promoting local food production, reducing carbon footprint, 
           and increasing green coverage, "GreenScape" directly contributes to a more sustainable future.
          {" "}
        </p>
      ),
    },
    
  ]
  return (
    <>
      <section className={styles.features}>
        <div className="container">
        <h2 className="hero__title" style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px' }}>Explore Green Spaces</h2>
      <br/><br/>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <div >
        <div>
          <div className='hero__subtitle' style={{ textAlign: 'right', fontWeight: 'bold', margin: '30px' }}>
            <p> Images sourced from <a href='https://www.instagram.com/techklan/'>Techklan Inc.</a> </p>
          </div>
        </div>
      </div>

      <section className={`hero hero--primary company-details-section ${showCompanyDetails ? 'show' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <CompanyDetails />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
