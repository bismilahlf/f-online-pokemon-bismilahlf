import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../styles/App.css';
import Card from './Card';
import Details from './Details'


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
    let APIcall = 'https://pokeapi.co/api/v2/pokemon/';
    
  // 1) LLamada a la 1ª URL
    fetch(APIcall)
    .then((response) => {return response.json()})
    .then((responseJSON) => {
      for (let i = 0; i < 25; i++) {
        
        // Llamada a la 2ª URL    
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
    
    //Ordenar las tarjetas por ID
    this.state.filteredCardList.sort((a, b) => {
      return a.id - b.id;
    });

    const pokemons = this.state.filteredCardList.map( (item, i) => {
      return (
        <li className="pokemon-list-element" key={i}>
          <Link to={`/details/${item.id}`}>
            <Card
              pokemon={item}
            />
          </Link>
          
        </li>
      )
    });

    return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path='/' render={ () => 
            <div>
              <div className="input-wrapper">
              <input className="app-input" type="text" onChange={this.filterByName}/>
              </div>
              <div className="pokemon-list-wrapper">
                <ul className="pokemon-list">
                  {pokemons}
                </ul>
              </div>
            </div>
          } />
          <Route path='/details/:id' component={ Details } />

        </Switch>
        
      </div>
    );
  }
}

export default App;
