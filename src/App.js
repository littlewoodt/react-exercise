import React, { Component } from 'react';
import Contact from "./components/Contact";

import './App.css'

import Header from './header'
import Table from './table'

import getContacts from './data/get-contacts'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: 'All',
      search: '',
      kind: "all",
    };
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
      kind: "name",
      stateFilter: "All"
    });
    // console.log(e.target.value);
  }

  updateStateSearch(e) {
    this.setState({
      stateFilter: e.target.value,
      kind: "state"
    });
    // console.log(e.target.value);
  }

  componentDidMount() {
    getContacts().then(contacts => this.setState({ contacts: contacts }))
    // console.log(this.state.contacts);
  }

  render() {

    let filteredStateContacts = this.state.contacts.filter(
    (contact) => {

      let state = "NA";

      if (contact.profile.address.state) {
        state = contact.profile.address.state;
      }
        return state.toLowerCase().indexOf(this.state.stateFilter.toLowerCase()) !== -1;
      } 
    );

    let filteredContacts = this.state.contacts.filter((c) => {

      let name = c.firstName + ' ' + c.lastName;

        return name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

      }
    );
     

    return (

      <div>
        {<Header />}

        <div className="contactList">
          <div className="header">

            <input type="text" 
            placeholder="enter name to search"
            value={this.state.search} 
            onChange={this.updateSearch.bind(this)}/>

             <button type="submit">search</button>
      
            <select
              value={this.state.stateFilter}
              onChange={this.updateStateSearch.bind(this)}
            >
            <option>
              {this.state.stateFilter}
            </option>
            {this.state.contacts.map((contact) =>

              <option key={contact.id}>
                {contact.profile.address.state}
              </option>
            )}
            </select>
          </div>

            {
              this.state.kind === "state" && <div>

              {filteredStateContacts.map(contact => <Contact key={contact.id} 
              name={contact.firstName + ' ' + contact.lastName} 
              email={contact.email}
              company={contact.profile.company} 
              state={contact.profile.address.state || contact.profile.address.city || 'NA'} 
              />)}

              </div>
            }

            {
              this.state.kind === "name" && <div>

              {filteredContacts.map(c => <Contact key={c.id} 
                name={c.firstName + ' ' + c.lastName} 
                email={c.email}
                company={c.profile.company} 
                state={c.profile.address.state || c.profile.address.city || 'NA'} 
                />)}

              </div>
            }

            {
              this.state.kind === "all" && <div>

              {filteredContacts.map(c => <Contact key={c.id} 
                name={c.firstName + ' ' + c.lastName} 
                email={c.email}
                company={c.profile.company} 
                state={c.profile.address.state || c.profile.address.city || 'NA'} 
                />)}

              </div>
            }


        </div>

      </div>
    )
  }
}

export default App