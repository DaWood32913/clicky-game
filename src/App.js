import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import nflLogo from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.nflLogo to the cards json array
  state = {
    nflLogo,
    clickedTeamIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedTeamIds = this.state.clickedTeamIds;

    if(clickedTeamIds.includes(id)){
      this.setState({ clickedTeamIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedTeamIds.push(id)

      if(clickedTeamIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedTeamIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ nflLogo, clickedTeamIds, score: clickedTeamIds.length, status: " " });

      for (let i = nflLogo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nflLogo[i], nflLogo[j]] = [nflLogo[j], nflLogo[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.nflLogo.map(Team => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={Team.id}
              key={Team.id}
              name={Team.name}
              images={Team.images}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Woodley Johnson 2019<a href="https://github.com/dawood32913/clicky-game" target="_blank" rel="noopener noreferrer"> here</a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;
