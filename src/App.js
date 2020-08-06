import React from 'react';
import './App.css';
import CardBox from './component/CardBox';
import imageOne from './images/1208.jpg'

function App() {
  return (
    <div className="App">
      <CardBox 
        cardType="short"
        cardFlavor="lifestyle"
        isQuote={true}
        author="Ankita Rao"
        imageAdd={true}
        imageSrc={imageOne}
        widthMod = {2}
        headLine="Testing"
        subLine="This a test design" 
        descAdd={false}
        descLine="This is a test description line" />
    </div>
  );
}

export default App;
