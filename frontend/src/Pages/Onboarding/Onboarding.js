import React, { Component } from "react";
import { Steps } from "intro.js-react";

class TestIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: "#hello",
          intro: "Xin chào tôi là tài bạn có cần sự trợ giúp gì không 😊?",
        },
        {
          element: ".world",
          intro: "Ôi thế bạn cần sự trợ giúp gì nào ?",
        },
        {
          element: "#hello1",
          intro: "Go Go Go Go ?",
        },
      ],
      hintsEnabled: false,
      hints: [
        {
          element: ".hello",
          hint: "Hello hint",
          hintPosition: "middle-right",
        },
      ],
    };
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  toggleSteps = () => {
    this.setState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Steps
              enabled={this.state.stepsEnabled}
              steps={this.state.steps}
              initialStep={this.state.initialStep}
              onExit={this.onExit}
              ref={(steps) => (this.steps = steps)}
            />
            <button class="world" onClick={this.toggleSteps}>
              Start Tutorial
            </button>
            <button id="hello">Login Page</button>

            <button id="hello1">Meo Meo</button>
          </div>
        </header>
      </div>
    );
  }
}

export default TestIntro;
