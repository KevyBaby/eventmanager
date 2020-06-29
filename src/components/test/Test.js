import React, { Component } from 'react';
class Test extends Component {
  state = {
    title: '',
    body: '',
  };
  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/KevyBaby/fakeEventsServer/master/db.json'
    )
      .then((response) => response.json())
      .then((data) => this.setState({ title: data.title, body: data.body }));
  }
  //   componentWillMount() {
  //     console.log('Component will mount');
  //   }

  //   componentDidUpdate() {
  //     console.log('Component did update');
  //   }

  //   componentWillUpdate() {
  //     console.log('Component will update');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('Component will recieve props');
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('getSnapshotBeforeUpdate');
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
