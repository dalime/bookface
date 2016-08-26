import React, { Component } from 'react';

export default class UserAvatar extends Component {
  render() {
    let { profile } = this.props;

    if (!profile) {
      return (
        <div className="nav navbar-nav navbar-right">
          <img src="" />
        </div>
      )
    }

    return (
      <div className="nav navbar-nav navbar-right">
        <img src={profile.picture} height="30px" />
      </div>
    )
  }
}
