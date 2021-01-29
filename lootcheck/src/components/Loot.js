import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchBitcoin} from "../actions/bitcoin";
import PropTypes from 'prop-types'

export class Loot extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBitcoin()
  }

  computeBitcoin() {
    const { bitcoin } = this.props

    if (Object.keys(bitcoin).length === 0) return ''

    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)
  }

  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bitcoin: state.bitcoin,
    balance: state.balance
  }
}

Loot.propTypes = {
  fetchBitcoin: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchBitcoin})(Loot);