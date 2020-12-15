import React, {Component} from 'react';
import axios from 'axios';
import CardViewer from "../components/CardViewer/cardViewer"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      collectionNumber: 0,
      collections: [],
      cardNumber: 0,
      loading: true
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections')
    .then(res => {
      const collections = res.data;
      this.setState({collections});
      this.setState({ loading: false })
    })
  }

  goToNextCard(){
    let tempCardNumber = this.state.cardNumber;
    tempCardNumber++;
    if(tempCardNumber === this.collections[this.state.collectionNumber].cards.length){
      tempCardNumber = 0;
    }
    this.setState({
      cardNumber: tempCardNumber
    });
  }

  goToPreviousCard(){
    let tempCardNumber = this.state.cardNumber;
    tempCardNumber--;
    if(tempCardNumber < 0){
      tempCardNumber = this.cards.length - 1;
    }
    this.setState({
      cardNumber: tempCardNumber
    });
  }

  render(){
    if(this.state.loading === true){
      return(<div>Loading...</div>)
    }else{
      return(
        <div>
          <CardViewer 
          collection={this.state.collections[0]} 
          cards={this.state.collections[0].cards} 
          currentCard={this.state.collections[0].cards[this.state.cardNumber]}
          nextCard={() => this.goToNextCard()} 
          previousCard={() => this.goToPreviousCard()} 
          />
          
        </div>
      )
    }
  }
}

export default App;
