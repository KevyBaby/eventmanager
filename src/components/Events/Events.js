import React, { Component } from 'react';
import { Consumer } from '../../context';
import Event from './Event';

class Events extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { events } = value; //state
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Event</span>
                <span className="text-dark">List</span>
              </h1>
              {events.map((event) => (
                <Event key={event.id} event={event} /> //maps through events, each prop has key using id.
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Events;
