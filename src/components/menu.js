import React, { Component } from "react";

class Menu extends Component {
  state = {
    user: "",
  };
  addUser = (user) => {
    console.log(user);
    this.setState({ user: user });
  };
  render() {
    return (
      <nav>
        <div className="logo">
          <a href="https://github.com">
            <img src="/GitHub-Mark-Light-32px.png" alt="not found" />
          </a>
          <div className="input-group">
            <input
              type="text"
              name="user"
              className="form-control"
              value={this.state.value}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
        <ul className="menu">
          <li className="item">
            <a href="https://github.com/soykot2910">Dashboard</a>
          </li>
          <li className="item">
            <a href="">Pull requests</a>
          </li>
          <li className="item">
            <a href="">Issues</a>
          </li>
          <li className="item button">
            <a href="">Explore</a>
          </li>
          <li className="item button secondary">
            <a href="">Sign Out</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
