import React, { Component } from 'react';
import CardBox from './CardBox'
import imageOne from '../images/1208.jpg'

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
        switch(this.props.sectionTitle){
            case 'headLines':{
                return(
                    <section className={this.props.sectionTitle}>
                        <div className="leftColumn">
                            <h1>Headlines</h1>
                            <h3>Monday</h3>
                            <h3>16 Decemeber 2019</h3>
                        </div>
                        <div className="sectionContent">
                            <div className="row">
                                <div className="primary vline">
                                    <CardBox 
                                        cardType="tall"
                                        cardFlavor="news"
                                        isQuote={false}
                                        author="Ankita Rao"
                                        imageAdd={true}
                                        imageSrc={imageOne}
                                        widthMod = {3}
                                        headLine="Testing"
                                        subLine="This a test design" 
                                        descAdd={true}
                                        descLine="This is a test description line" />
                                </div>
                                <div className="regular">
                                    <CardBox 
                                            cardType="tall"
                                            cardFlavor="news"
                                            isQuote={false}
                                            author="Ankita Rao"
                                            imageAdd={true}
                                            imageSrc={imageOne}
                                            widthMod = {1}
                                            headLine="Testing"
                                            subLine="This a test design" 
                                            descAdd={true}
                                            descLine="This is a test description line" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="column vline">
                                    <CardBox 
                                                cardType="tall"
                                                cardFlavor="news"
                                                isQuote={false}
                                                author="Ankita Rao"
                                                imageAdd={true}
                                                imageSrc={imageOne}
                                                widthMod = {2}
                                                headLine="Testing"
                                                subLine="This a test design" 
                                                descAdd={true}
                                                descLine="This is a test description line" />
                                </div>
                                <div className="column vline">
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                </div>
                                <div className="column">
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={false}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }
            case 'spotLight':{
                return(
                    <section className={this.props.sectionTitle}>
                        <div className="leftColumn">
                            <h1>Spotlight</h1>
                        </div>
                        <div className="sectionContent">
                            <div className="row">
                                <div className="primary vline">
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {3}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                </div>
                                <div className="regular">
                                    <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="column vline">
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="opinion"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                </div>
                                <div className="column">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="news"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }
            case 'opinionSection':{
                return(
                    <section className={this.props.sectionTitle}>
                            <div className="leftColumn">
                                <h1>Opinion</h1>
                            </div>
                            <div className="sectionContent">
                                <div className="row">
                                    <div className="primary vline">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    </div>
                                    <div className="column vline">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                    </div>
                                    <div className="column">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column vline">
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="opinion"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    </div>
                                </div>
                            </div>
                        </section>
                );
            }
            case 'sportsSection':{
                return(
                    <section className={this.props.sectionTitle}>
                            <div className="leftColumn">
                                <h1>Sports</h1>
                            </div>
                            <div className="sectionContent">
                                <div className="row">
                                    <div className="primary vline">
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="sport"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {3}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                    </div>
                                    <div className="column">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="sport"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column vline">
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="sport"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="sport"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="sport"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                        <CardBox 
                                                    cardType="short"
                                                    cardFlavor="sport"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {2}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={false}
                                                    descLine="This is a test description line" />
                                    </div>
                                    <div className="column vline">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="sport"
                                                    isQuote={true}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    //headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                    </div>
                                    <div className="column">
                                        <CardBox 
                                                    cardType="tall"
                                                    cardFlavor="sport"
                                                    isQuote={false}
                                                    author="Ankita Rao"
                                                    imageAdd={true}
                                                    imageSrc={imageOne}
                                                    widthMod = {1}
                                                    headLine="Testing"
                                                    subLine="This a test design" 
                                                    descAdd={true}
                                                    descLine="This is a test description line" />
                                    </div>
                                </div>
                            </div>
                        </section>
                );
            }
            default:{
                return(<div>error reading sectionTitle</div>);
            }
        }
    }
}