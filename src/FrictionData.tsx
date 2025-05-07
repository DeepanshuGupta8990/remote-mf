import React, { useEffect } from 'react';
import './index.css';

const FrictionData = () => {
  const [products, setProducts] = React.useState<any>('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setProducts(
        <ul className='list-disc list-inside text-left'>
          <li>
            <strong>Apple iPhone 15</strong> – ₹79,999
            <br />
            Flagship smartphone with A16 Bionic chip.
          </li>
          <li>
            <strong>Samsung Galaxy S24</strong> – ₹75,000
            <br />
            Premium Android with dynamic AMOLED display.
          </li>
          <li>
            <strong>OnePlus 12</strong> – ₹65,000
            <br />
            High-performance phone with fast charging.
          </li>
          <li>
            <strong>MacBook Air M2</strong> – ₹1,14,900
            <br />
            Lightweight laptop with long battery life.
          </li>
          <li>
            <strong>Noise Smartwatch</strong> – ₹2,999
            <br />
            Affordable fitness tracking smartwatch.
          </li>
        </ul>,
      );
    }, 1000);
  }, []);

  return (
    <div className='m-4 p-4 bg-lime-200 text-center rounded-xl shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Product List</h1>
      {products}
    </div>
  );
};

export default FrictionData;
