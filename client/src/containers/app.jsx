import React, {Component} from 'react';
import axios from 'axios';
import CardViewer from '../components/CardViewer/cardViewer';
import LandingPage from '../components/LandingPage/landingPage';
import './app.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      collections: [],
      collectionNumber: 0,
      cards: [],
      cardNumber: 0,
      loading: true,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections')
    .then(res => {
      const collections = res.data[this.state.collectionNumber];
      const cards = res.data[this.state.collectionNumber].cards;
      this.setState({collections});
      this.setState({cards});
      this.setState({ loading: false })
    })
  }

  addNewCard(card){
    this.state.cards.push(card);
    this.setState({
      cardNumber: this.state.cards.length -1
    })
  }

   goToNextCard(){
     let tempCardNumber = this.state.cardNumber;
     tempCardNumber++;
     if(tempCardNumber === this.state.cards.length){
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
       tempCardNumber = this.state.cards.length - 1;
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
        <div className="container-fluid app">
          <LandingPage/>
          <CardViewer card={this.state.cards[this.state.cardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()} />
        </div>
      )
    }
  }
}

export default App;