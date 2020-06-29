import React, { Component } from 'react';
//Controlled component
class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.locationInput = React.createRef();
    this.dateInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    const event = {
      name: this.nameInput.current.value,
      location: this.locationInput.current.value,
      date: this.dateInput.current.value,
    };

    console.log(event);
  };

  static defaultProps = {
    name: 'FBK party',
    location: 'Johannesburg',
    date: '2020/06/26',
  };

  render() {
    const { name, location, date } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Event Name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="address"
                name="location"
                className="form-control form-control-lg"
                placeholder="Enter Event Location..."
                defaultValue={location}
                ref={this.locationInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control form-control-lg"
                placeholder="Enter Event Date..."
                defaultValue={date}
                ref={this.dateInput}
              />
            </div>
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddEvent;
