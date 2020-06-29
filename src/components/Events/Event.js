import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Event extends Component {
  //Events class
  state = {
    showEventInfo: false, //Show or hide event information
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch({ type: 'DELETE_EVENT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_EVENT', payload: id });
    }
  };
  render() {
    const { id, name, location, date } = this.props.event; //namespace
    const { showEventInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 ">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({ showEventInfo: !this.state.showEventInfo })
                  }
                  className="fa fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  className="fa fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`event/edit/${id}`}>
                  <i
                    class="fa fa-pencil"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem',
                    }}
                  ></i>
                </Link>
              </h4>
              {showEventInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Venue: {location}</li>
                  <li className="list-group-item"> Date: {date}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      //passed name,date and location as props(properties)
    );
  }
}
//Property type checking
Event.propTypes = {
  event: PropTypes.object.isRequired,
};
export default Event;
