import React from 'react';

const BeerStyles = ({ beers }) => {
  const redCount = beers.filter(beer => beer.beerStyle === 'Red').length;
  const ipaCount = beers.filter(beer => beer.beerStyle === 'IPA').length;


    // ejerc 4
    const allStyles = beers.reduce((acc, beer) => {
      if (!acc.includes(beer.beerStyle)) {
        acc.push(beer.beerStyle);
      }
      return acc;
    }, []);
  
  return (
    <div>
      <h2>Beer Styles</h2>
      <p>Red: {redCount}</p>
      <p>IPA: {ipaCount}</p>

      <div>
        <h2>Estilos disponibles</h2>
        <ul>
          {allStyles.map((style, index) => (
            <li key={index}>{style}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerStyles;