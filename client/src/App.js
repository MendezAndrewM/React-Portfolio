import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"

class App extends Component {

  constructor(props) {
    super(props)
    // this.state = { isSignedIn: false }
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav loggedIn={this.state.isSignedIn} /> */}
          <Route exact path="/" component={Home} />
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App;
