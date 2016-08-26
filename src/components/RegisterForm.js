import React, { Component } from 'react';
import UserActions from '../actions/UserActions';

export default class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password1: '',
      password2: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      picture: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    let newState = {};
    newState[key] = value;

    // dynamic state manipulation
    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();
    let { username, password1, password2, fname, lname, email, phone, address, picture } = this.state;
    if (password1 !== password2) {
      this.setState({
        password1: '',
        password2: ''
      })
      return alert('Passwords do not match, try again.');
    }

    let user = {
      username,
      password: password1,
      fname,
      lname,
      email,
      phone,
      address,
      picture
    };

    UserActions.register(user);
  }

  render() {
    let { username, password1, password2, fname, lname, email, phone, address, picture } = this.state;

    return (
      <div>
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
              value={username}
              data-statekey='username'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password1}
              data-statekey='password1'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password (again)</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password2}
              data-statekey='password2'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
              value={fname}
              data-statekey='fname'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
              value={lname}
              data-statekey='lname'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="none@none.com"
              required
              value={email}
              data-statekey='email'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="555-555-5555"
              required
              value={phone}
              data-statekey='phone'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="555 Main St., City, ST"
              required
              value={address}
              data-statekey='address'
              onChange={this._onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Picture URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="www.google.com"
              required
              value={picture}
              data-statekey='picture'
              onChange={this._onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
