import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row col-md-3 col-lg-3 nav navbar-nav">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">Search</button>
          </span>
        </div>
      </div>
    )
  }
}
