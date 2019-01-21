import React from 'react';
import Table from '../../components/Table';

const App = () => {
  return (
    <div className="container">
      <h1>Dota 2 Pros</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default App;
