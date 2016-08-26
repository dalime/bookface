import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

export default class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
      picture: ""
    }

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._saveChanges = this._saveChanges.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
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
      fname: this.props.profile.fname,
      lname: this.props.profile.lname,
      email: this.props.profile.email,
      phone: this.props.profile.phone,
      address: this.props.profile.address,
      picture: this.props.profile.picture
    })
  }

  _openModal(e) {
    e.preventDefault();
    this.setState({showModal: true});
  }

  _closeModal(e) {
    e.preventDefault();
    this.setState({showModal: false});
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    let newState = {};
    newState[key] = value;

    this.setState({
      [key]: value
    });
  }

  _saveChanges(e) {
    //e.preventDefault();
    let { fname, lname, email, phone, address, picture } = this.state;

    let updatedUser = {
      fname,
      lname,
      email,
      phone,
      address,
      picture
    };

    UserActions.editProfile(updatedUser);

    this.setState({showModal: false});
  }

  render() {
    let { fname, lname, email, phone, address, picture } = this.state;

    return (
      <div>
        <button className="btn btn-primary btn-sm" onClick={this._openModal}>Edit Profile</button>

        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this._saveChanges}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={this.props.profile.fname}
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
              placeholder={this.props.profile.lname}
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
              placeholder={this.props.profile.email}
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
              placeholder={this.props.profile.phone}
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
              placeholder={this.props.profile.address}
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
              placeholder={this.props.profile.picture}
              required
              value={picture}
              data-statekey='picture'
              onChange={this._onInputChange}
            />
          </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" onClick={this._saveChanges}>Save</Button>
            <Button onClick={this._closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
