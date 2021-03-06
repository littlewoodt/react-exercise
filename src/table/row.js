// Row Component goes here
import React, { Component } from "react";
import getContacts from '../data/get-contacts'


class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
 
  }

  render() {

    return(

        <div className="row">

          <div><span>{this.props.name}</span></div>
          <div><span>{this.props.email}</span></div>      
          <div><span>{this.props.company}</span></div>
          <div><span>{this.props.state}</span></div>
          
        </div>
    );
  }
};

export default Row;