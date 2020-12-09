import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cardNumber: 0,
      collection: []
    }

  }

  componentDidMount() {
    axios.get('put collection endpoint here')
    .then(res => {
      const collection = res.data;
      this.setState({collection: collection})
    })
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }
}

export default App;
