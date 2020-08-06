import React, { Component } from 'react';

export default class CardBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: '220px'
        }
        //expected props:
        //cardType = big / small
        //widthMod = 1 / 2 / 3
        //imageSRC = {imageSRC} from parent
        //headLine = "headline text"
        //subLine  = "subline text"
        //descAdd  = true / false
        //descLine = "description text"
    }
    render(){
        return(
            <article>
                {this.props.cardType==="big"?<div><img src="#" alt="#" /><br /></div>:''}
                <p><h6>{this.props.headline}</h6> / {this.props.subline}</p>
                {this.props.descAdd?<p>{this.props.descLine}</p>:''}
            </article>
        );
    }
}