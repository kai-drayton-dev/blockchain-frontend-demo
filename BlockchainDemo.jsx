import React, { useState, useEffect } from 'react';

function BlockchainDemo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate blockchain call
    setTimeout(() => {
      setData('Blockchain data loaded successfully!');
    }, 1000);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Blockchain Frontend Demo</h2>
      {data ? <p>{data}</p> : <p>Loading data from blockchain...</p>}
    </div>
  );
}

export default BlockchainDemo;
