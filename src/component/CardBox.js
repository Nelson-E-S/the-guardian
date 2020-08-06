import React, { Component } from 'react';

export default class CardBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: '220'
        }
        //expected props:
        //cardType = tall / short
        //cardFlavor = news / opinion / sport / culture / lifestyle
        //widthMod = 1 / 2 / 3
        //imageAdd = true / false
        //imageSrc = {imageSrc} from parent
        //headLine = "headline text"
        //subLine  = "subline text"
        //descAdd  = true / false
        //descLine = "description text"
    }
    render(){
        let artClass = `${this.props.cardType} ${this.props.cardFlavor}`
        let artStyle = {
            width: `${this.props.widthMod * this.state.width}px`
        }
        return(
            <article className={artClass} style={artStyle}>
                {this.props.imageAdd?<img src={this.props.imageSrc} alt="card" />:''}
                <div>
        <p className="title"><span className="headLine">{this.props.headLine}</span> {this.props.headLine?'/':''} {this.props.isQuote?<span className="quote">"</span>:''}{this.props.subLine}{this.props.isQuote?<div><em className="author">{this.props.author}</em></div>:''}</p>
                    {this.props.descAdd?<p className="description">{this.props.descLine}</p>:''}
                </div>
            </article>
        );
    }
}