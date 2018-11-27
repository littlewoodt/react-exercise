// Table Component goes here
import React, { Component } from "react";
import Row from './row';

import Contact from '../components/Contact';
import contact from '../data/get-contacts';

class Table extends Component {

    constructor(props) {
      super(props);

    this.state = {
      search: '',
      state: "All",
      contacts: props.contacts
    };
  }

  render() {

    return (
      <div>
       <Row
          name={this.props.name}
          email={this.props.email}
          company={this.props.company}
          state={this.props.state}
        />
      </div>

    );
  } 
}

export default Table;