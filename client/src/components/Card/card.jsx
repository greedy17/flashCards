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
        return(
            <div onClick={this.onClickHandler} className="card">
                <h1 className="word title">{this.props.card.word}</h1>
                <h3>{this.state.showMessage && this.props.card.definition}</h3>   
            </div>
         );
    }
}

export default Card;