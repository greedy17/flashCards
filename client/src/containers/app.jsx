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
      cardNumber: 0,
      loading: true,
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections')
    .then(res => {
      const collections = res.data;
      this.setState({
        collections,
        loading: false
      });
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
     if(tempCardNumber === this.state.collections[this.state.collectionNumber].cards.length){
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
       tempCardNumber = this.state.collections[this.state.collectionNumber].cards.length - 1;
     }
     this.setState({
       cardNumber: tempCardNumber
    });
   }

   goToNextCollection(){
    let tempCollectionNumber = this.state.collectionNumber;
    tempCollectionNumber++;
    if(tempCollectionNumber === this.state.collections.length){
      tempCollectionNumber = 0;
    }
    this.setState({
      collectionNumber: tempCollectionNumber
   })
   console.log(this.state.collectionNumber);
 }

    goToPreviousCollection(){
      let tempCollectionNumber = this.state.collectionNumber;
      tempCollectionNumber--;
      if(tempCollectionNumber < 0){
        tempCollectionNumber = this.state.collections.length - 1;
      }
      this.setState({
        collectionNumber: tempCollectionNumber
    });
    }


   Scroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  render(){
    if(this.state.loading === true){
      return(<div>Loading...</div>)
    }else{
      return(
        <div className="container-fluid app">
          <LandingPage scroll={()=>this.Scroll()}/>
          <CardViewer
          collectionNumber={this.state.collectionNumber}
          collections={this.state.collections}
          cardNum = {this.state.cardNumber}
          cards={this.state.collections[this.state.collectionNumber].cards}
          nextCard={() => this.goToNextCard()} 
          previousCard={() => this.goToPreviousCard()}
          prevCollection={() => this.goToPreviousCollection()}
          nextCollection={() => this.goToNextCollection()}
          />
        </div>
      )
    }
  }
}

export default App;