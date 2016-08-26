import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

import EditProfile from './EditProfile';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: UserStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    })
  }

  render() {
    if (this.state.profile) {
      return (
        <div className="container">
          <h1>{this.state.profile.fname} {this.state.profile.lname}</h1>
          <img src={this.state.profile.picture} width="100px" />
          <h3>Username: {this.state.profile.username}</h3>
          <h3>Email: {this.state.profile.email}</h3>
          <h3>Phone: {this.state.profile.phone}</h3>
          <h3>Address: {this.state.profile.address}</h3>
          <EditProfile profile={this.state.profile}/>
        </div>
      )
    } else {
      return (
        <Loading show={true} color="blue" />
      )
    }
  }
}
