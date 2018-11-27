// Header Component goes here
import React, { Component } from "react";

import getContacts from '../data/get-contacts'


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
    
      <div className="Header">

        <h1>Contacts</h1>
       
      </div>

    );
  }
};

export default Header;