import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state ={
            showMessage: false
        }
    }
    onClickHandler = () => {
        this.setState({showMessage: !this.state.showMessage})
    }

    render(){
        if(this.props.cards.length > 0){
            return(
                <div onClick={this.onClickHandler} className="card">
                    <h1 className="word title">{this.props.cards[this.props.cardNum].word}</h1>
                    <h3>{this.state.showMessage && this.props.cards[this.props.cardNum].definition}</h3>   
                </div>)
        }else{
        return(
            <div className="card">
                <h1 className="title">Use the "Add card" button to add a card to this collection.</h1>   
            </div>
         );
    }}
}

export default Card;