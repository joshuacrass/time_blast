import React, { Component } from "react";
import Clock from "./clock";
import "./app.css";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "January 01, 3000",
      newDeadline: ""
    };
  }

  changeDeadline() {
    console.log("state", this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="main">
        <header>Time Blast</header>
        <div className="app">
          <div className="app-title">Countdown to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline} />
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder="new date"
              onChange={event =>
                this.setState({ newDeadline: event.target.value })
              }
            />
            <Button bsStyle="success" onClick={() => this.changeDeadline()}>
              Start Counting
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
