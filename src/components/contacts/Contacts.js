import React, { Component } from "react";
import Contact from "../contacts/Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  //using a constructor to create a state is not a necessity we can do without it as well
  //see example below for that
  //   constructor() {
  //     super();
  //     this.state = {
  //       contacts: [
  //         {
  //           id: 1,
  //           name: "John Doe",
  //           email: "jdoe@gmail.com",
  //           phone: "111-111-111",
  //         },
  //         {
  //           id: 2,
  //           name: "Karen Williams",
  //           email: "kwills@gmail.com",
  //           phone: "222-222-222",
  //         },
  //         {
  //           id: 3,
  //           name: "Henry Johnson",
  //           email: "hjohn@gmail.com",
  //           phone: "333-333-333",
  //         },
  //       ],
  //     };
  //   }
  //   state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "John Doe",
  //         email: "jdoe@gmail.com",
  //         phone: "111-111-111",
  //       },
  //       {
  //         id: 2,
  //         name: "Karen Williams",
  //         email: "kwills@gmail.com",
  //         phone: "222-222-222",
  //       },
  //       {
  //         id: 3,
  //         name: "Henry Johnson",
  //         email: "hjohn@gmail.com",
  //         phone: "333-333-333",
  //       },
  //     ],
  //   };

  //   deleteContact(id) {
  //     const { contacts } = this.state;
  //     const contactsAfterDelete = contacts.filter((contact) => contact.id !== id);
  //     this.setState({ contacts: contactsAfterDelete });
  //   }
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  //deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;

    // return (
    //   <React.Fragment>
    //     {contacts.map((contact) => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
