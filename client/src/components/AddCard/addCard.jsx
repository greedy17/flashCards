import React from 'react';
import './addCard.css'

  class addCard extends React.Component{
    constructor(props){
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
  
  render() {
    return (
      <div>
        <div className="add-card">
          <button className="btn btn-outline-info" data-toggle="modal" data-target="#addCardModal">Add Card</button>
        </div>
  
        <div className="modal fade" id="addCardModal" tabindex="-1" role="dialog" aria-labelledby="addCardModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCardModalTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <label>Front: </label><input class="form-control" id="cardFront" type="text" value={this.state.input} onChange={this.handleChange}></input>
                  <label>Back: </label><input class="form-control" id="cardBack" type="text" value={this.state.input} onChange={this.handleChange}></input>
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

