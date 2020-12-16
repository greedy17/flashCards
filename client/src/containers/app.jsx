import React, {Component} from 'react';
import axios from 'axios';
import CardViewer from '../components/CardViewer/cardViewer';
import LandingPage from '../components/LandingPage/landingPage';
import './app.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      collections: [],
      collectionNumber: 0,
      cards: [],
      cardNumber: 0,
      loading: true,
      cardFront:"",
      cardBack:""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections')
    .then(res => {
      const collections = res.data;
      const cards = res.data[this.state.collectionNumber].cards;
      this.setState({collections});
      this.setState({cards});
      this.setState({ loading: false })
      console.log(collections)
      console.log(cards)
    })
  }

  handleSubmit(){
    axios.post('http://localhost:5000/api/collections',{
      cardFront: "",
      cardBack:"",
      collection: ""
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
          <CardViewer 
            cardNum = {this.state.cardNumber}
            cards={this.state.cards}
            collections={this.state.collections} 
            card={this.state.cards[this.state.cardNumber]} 
            nextCard={() => this.goToNextCard()} 
            previousCard={() => this.goToPreviousCard()}
            handleSubmit={() => this.handleSubmit()}
          />
        </div>
      )
    }
  }
}

export default App;