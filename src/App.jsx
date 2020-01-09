import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import Header from "./components/Header";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { authenticate } from "./modules/auth";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false,
    updateIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { authenticated, renderIndex } = this.state;
    let performanceDataIndex;

    if (authenticated && renderIndex) {
      performanceDataIndex = (
        <>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={() => this.setState({ updateIndex: false })}
          />
          <button
            className="ui button"
            onClick={() => this.setState({ renderIndex: false })}
          >
            Hide past entries
          </button>
        </>
      );
    } else {
      performanceDataIndex = (
        <button
          id="show-index"
          className="ui button"
          onClick={() => this.setState({ renderIndex: true })}
        >
          Show past entries
        </button>
      );
    }

    return (
      <div className="ui main container">
        <Header
          renderLoginForm={this.state.renderLoginForm}
          authenticated={this.state.authenticated}
          loginButtonHandler={() => this.setState({ renderLoginForm: true })}
          submitFormHandler={this.onLogin}
        />
        <InputFields onChangeHandler={this.onChangeHandler} />
        {performanceDataIndex}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() =>
            this.setState({ entrySaved: true, updateIndex: true })
          }
        />
      </div>
    );
  }
}

export default App;
