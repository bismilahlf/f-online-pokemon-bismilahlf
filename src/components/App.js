import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';


class App extends Component {

  constructor(props){
    super(props);

    this.filterByName = this.filterByName.bind(this);

    this.state = {
      cardList: [],
      filteredCardList: []
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {return response.json()})
    .then((responseJSON) => {
      for (let i = 0; i < 25; i++) {
        fetch(responseJSON.results[i].url)
        .then(data => data.json())
        .then(dataJSON => {
          this.setState({ 
            cardList: this.state.cardList.concat(dataJSON),
            filteredCardList: this.state.filteredCardList.concat(dataJSON)
          })
        })
      }
    })
  }

  filterByName(event){
    const filteredCardList = this.state.cardList.filter((item) => {
      const nameLowercase = item.name.toLowerCase();
      const valueLowercase = event.target.value.toLowerCase();
      return nameLowercase.includes(valueLowercase);
    })
    
    this.setState(
      {filteredCardList: filteredCardList}
    )
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.filterByName}/>
        <ul className="character-list">
          {
            this.state.filteredCardList.map( (item, i) => {
                return (
                    <li key={i}>
                        <Card
                          pokemon={item}
                        />
                    </li>
                )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
