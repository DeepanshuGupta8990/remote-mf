import React, { useEffect } from 'react';

const FrictionData = () => {
  const [frictionData, setFrictionData] = React.useState<any>('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setFrictionData(
        <div>
          <h2>Friction Data</h2>
          <p>
            Friction is the resistance that one surface or object encounters when moving over
            another.
          </p>
          <p>It is a force that opposes the relative motion of two surfaces in contact.</p>
          <p>
            Friction can be classified into two main types: static friction and kinetic friction.
          </p>
          <p>Static friction prevents motion, while kinetic friction acts on moving objects.</p>
        </div>,
      );
    }, 1000);
  }, []);

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>Friction</h1>
      {frictionData}
    </div>
  );
};

export default FrictionData;
