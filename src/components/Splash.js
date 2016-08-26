import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

export default class Splash extends Component {
  constructor() {
    super();

    this.state = {
      profiles: UserStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserActions.getProfiles();
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profiles: UserStore.getAll()
    })
  }

  render() {
    if (this.state.profiles) {
      const Profiles = this.state.profiles.map(profile => {
        return (
          <div key={profile._id} className="container">
            <h1>{profile.fname} {profile.lname}</h1>
            <img src={profile.picture} width="100px"/>
            <h3>Email: {profile.email}</h3>
            <h3>Phone: {profile.phone}</h3>
            <h3>Address: {profile.address}</h3>
          </div>
        )
      })

      return (
        <div>
        {Profiles}
        </div>
      )
    } else {
      <Loading show={true} color="blue" />
    }
  }
}
