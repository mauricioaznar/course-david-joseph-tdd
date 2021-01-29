import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Gift from "./Gift";
import {max_number} from "../helper";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {gifts: []}
  }

  addGift = () => {
    const max_id = max_number(this.state.gifts.map(gift => gift.id))

    this.setState({
      ...this.state,
      gifts: [...this.state.gifts, {id: max_id + 1}]
    })

  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({gifts})
  }


  render() {
    return (
      <div>
        <h2>Gift giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map((gift, index) => {
              return <Gift
                gift={gift}
                key={index}
                removeGift={this.removeGift}
              />
            })
          }
        </div>
        <Button
          className="btn-add"
          onClick={this.addGift}
        >Add gift</Button>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
