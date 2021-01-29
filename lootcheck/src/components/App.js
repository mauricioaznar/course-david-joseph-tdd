import React, {Component} from 'react';
import Wallet from "./Wallet";
import Loot from "./Loot";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Loot check</h2>
        <hr />
        <Wallet />
        <Loot />
      </div>
    );
  }
}

export default App;