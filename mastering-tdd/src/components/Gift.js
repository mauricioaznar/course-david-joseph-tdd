import React, {Component} from 'react';
import {Form, FormControl, FormGroup, FormLabel, Button} from "react-bootstrap";
import PropTypes from 'prop-types'

class Gift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      present: ''
    }
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={e => this.setState({...this.state, person: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={e => this.setState({...this.state, present: e.target.value})}
            />
          </FormGroup>
          <Button
            className="btn-remove"
            onClick={() => {
              this.props.removeGift(this.props.gift.id)
            }}
          >Remove gift</Button>
        </Form>
      </div>
    );
  }
}

Gift.propTypes = {
  gift: PropTypes.object.isRequired,
  removeGift: PropTypes.func.isRequired
}

export default Gift;