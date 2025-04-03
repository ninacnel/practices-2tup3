import React from 'react';


const ChangeDollar = ({ dollar, onSetNewDollar }) => {
  const handleDollarChange = (e) => {
    onSetNewDollar(e.target.value);
  };


  return (
    <div>
      <label>Ingrese nueva cotizacion:  </label>
      <input
        type="number"
        value={dollar}
        onChange={handleDollarChange}
      />
    </div>
  );
};


export default ChangeDollar;
