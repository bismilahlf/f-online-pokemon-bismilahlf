import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      cardList: []
    }
  }

  render() {
    return (
      <div>
        <input type="text"/>
        <Card/>
      </div>
    );
  }
}

export default App;
