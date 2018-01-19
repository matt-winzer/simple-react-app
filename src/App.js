import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  state = {characters: []}

  componentDidMount() {
    console.log('mounting')
    fetch('http://galvanize-cors-proxy.herokuapp.com/https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
        // console.log(this.state)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Here's a list of students in Galvanize!
        </p>
        <CharacterList characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
