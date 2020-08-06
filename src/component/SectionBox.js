import React, { Component } from 'react';
import CardBox from './component/CardBox';
import imageOne from './images/1208.jpg'

/*<CardBox 
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
        descLine="This is a test description line" />*/
export default class SectionBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 220
        }
    }
    render(){
        
    }
}