import React, { Component } from "react";
import Menu from "./components/menu";
import Info from "./components/info";
import Repository from "./components/repository";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const URL = "https://api.github.com/users";

class App extends Component {
  state = {
    user: "soykot2910",
    info: "",
    repo: [],
  };
  componentDidMount() {
    console.log("ok");
    const fetchData = async () => {
      let res = await axios.get(`${URL}/${this.state.user}`);
      this.setState({
        info: res.data,
      });
      console.log(res);
    };

    fetchData();
    this.repoList();
  }

  repoList = async () => {
    let res = await axios.get(`${URL}/${this.state.user}/repos`);
    this.setState({
      repo: res.data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App text-light">
          <div className="container">
            <header>
              <Menu />
            </header>
            <Info info={this.state.info} />
            <Repository repo={this.state.repo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
