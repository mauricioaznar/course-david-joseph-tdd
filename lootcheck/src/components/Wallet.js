import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deposit, withdraw} from '../actions/balance'
import PropTypes from 'prop-types'

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: undefined
    }
  }

  updateBalance = (event) => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    })
  }

  handleClick = () => {
    this.props.deposit(this.state.balance)
  }

  handleWithdraw = () => {
    this.props.withdraw(this.state.balance)
  }

  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet balance: {this.props.balance}
        </h3>
        <br/>
        <input className="input-wallet" onChange={this.updateBalance}/>
        <button
          onClick={() => {
            this.handleClick()
          }}
          className="btn-deposit"
        >
          Deposit
        </button>
        <button
          onClick={() => {
            this.handleWithdraw()
          }}
          className="btn-withdraw"
        >
          Deposit
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

Wallet.propTypes = {
  deposit: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {deposit, withdraw})(Wallet);