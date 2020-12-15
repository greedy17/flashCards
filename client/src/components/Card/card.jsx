import React, {Component} from 'react';
import './card.css';

<<<<<<< HEAD
function Card(props){
    return(
        <div className="card">
            {console.log(props.card)}
            <div className="card--word">{props.card.word}</div>
            <div className="card--word">{props.card.definition}</div>
            
        </div>
        
    );
=======
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
        return(
            <div onClick={this.onClickHandler} className="card">
                <h1 className="word title">{this.props.card.word}</h1>
                <h3>{this.state.showMessage && this.props.card.definition}</h3>   
            </div>
         );
    }
>>>>>>> a2d39e998ba5776ce789575baa9f50a05e79f04e
}

export default Card;