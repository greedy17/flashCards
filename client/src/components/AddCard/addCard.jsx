import React from 'react';
import './addCard.css'

  class addCard extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        cardFront: "",
        cardBack: "",
        collection: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      const name = event.target.name;
      this.setState({
        [name]: event.target.value,
      })
      console.log(this.state.cardFront, this.state.cardBack)

    }
    
  
  render() {
    {console.log(this.props)}
    return (
      <div>
        <div className="add-card">
          <button className="btn btn-outline-info" data-toggle="modal" data-target="#addCardModal">Add Card</button>
        </div>
  
        <div className="modal fade" id="addCardModal" tabIndex="-1" role="dialog" aria-labelledby="addCardModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" id="addCardModalTitle">Modal title</div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.props.handleSubmit}>
                <div className="modal-body">
                  <label>Front: </label>
                  <input 
                    name="cardFront"
                    className="form-control"  
                    type="text"
                    onChange={this.handleChange} 
                  >
                  </input>
                  <label>Back: </label>
                  <input 
                    name="cardBack"
                    className="form-control"
                    type="text"
                    onChange={this.handleChange} 
                    >
                  </input>
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addCard;

