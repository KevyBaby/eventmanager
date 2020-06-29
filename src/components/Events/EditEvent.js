import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextinputGroup';
import axios from 'axios';
//Controlled component
class EditEvent extends Component {
  state = {
    name: '',
    location: '',
    date: '',
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const event = res.data;

    this.setState({
      name: event.name,
      location: event.location,
      date: event.date,
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, location, date } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Event name is required' } });
      return;
    }

    if (location === '') {
      this.setState({ errors: { location: 'Event address is required' } });
      return;
    }

    if (date === '') {
      this.setState({ errors: { date: 'Event date is required' } });
      return;
    }

    const updEvent = {
      name,
      location,
      date,
    };
    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updEvent
    );

    dispatch({ type: 'UPDATE_EVENT', payload: res.data });

    this.setState({
      name: '',
      location: '',
      date: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, location, date, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header text-dark bg-primary">Edit Event</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Event Name"
                    name="name"
                    placeholder="Enter event name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Event Location"
                    name="location"
                    placeholder="Enter address"
                    value={location}
                    onChange={this.onChange}
                    error={errors.location}
                  />
                  <TextInputGroup
                    label="Event Date"
                    name="date"
                    type="date"
                    placeholder="Enter event date"
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                  <input
                    type="submit"
                    value="Update Event"
                    className="btn btn-secondary btn-block text-dark"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditEvent;
