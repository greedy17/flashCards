import React, {Component} from 'react';
import axios from 'axios';
import CardViewer from '../components/CardViewer/cardViewer';
import LandingPage from '../components/LandingPage/landingPage';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      collectionNumber: 0,
      collections: []
    }

  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/collections')
    .then(res => {
      const collections = res.data;
      this.setState({collections})
    })
  }

  render(){
    return(
      <div>
        <LandingPage/>
        <CardViewer/>
      </div>
    )
  }
}

export default App;
