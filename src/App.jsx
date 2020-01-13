import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import Header from "./components/Header";
import InputFields from "./components/InputFields";
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
         <button	
          id="show-index"	
          className="ui large inverted basic fluid button"	
          onClick={() => this.setState({ renderIndex: false })}	
        >	
          Hide performance history<br></br>
          <i class="angle double up icon" style={{ padding: '4px' }}></i>	
        </button>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={() => this.setState({ updateIndex: false })}
          />
        </>
      );
    } else if (authenticated && !renderIndex) {	
      performanceDataIndex = (	
        <button	
          id="show-index"	
          className="ui large inverted basic fluid button"	
          onClick={() => this.setState({ renderIndex: true })}	
        >	
          Show performance history<br></br>
          <i class="angle double down icon" style={{ padding: '4px' }}></i>	
        </button>
      );
    }

    return (
      <div id="main" className="ui main container">
        <Header
          renderLoginForm={this.state.renderLoginForm}
          authenticated={this.state.authenticated}
          loginButtonHandler={() => this.setState({ renderLoginForm: true })}
          submitFormHandler={this.onLogin}
        />
        <InputFields onChangeHandler={this.onChangeHandler} />
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
        {performanceDataIndex}
      </div>
    );
  }
}

export default App;
