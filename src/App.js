import React from 'react';
import './App.css';
import SectionBox from './component/SectionBox';

function App() {
  return (
    <div className="App">
      <SectionBox sectionTitle="headLines" />
      <SectionBox sectionTitle="spotLight" />
      <SectionBox sectionTitle="opinionSection" />
      <SectionBox sectionTitle="sportsSection" />
    </div>
  );
}

export default App;
