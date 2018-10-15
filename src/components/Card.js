import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      evolvesFrom: ''
    }
  }

  componentWillReceiveProps(props){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemon.id}/`)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        evolvesFrom: responseJSON.evolves_from_species 
        ? `Evolves from: ${responseJSON.evolves_from_species.name}` 
        : ''
      })
    })
  }

  render() {
    return (
      <div className="card-wrapper">
        <img className="card-image" src={this.props.pokemon.sprites.front_default} alt=""/>
        <span className="card-id">ID/{this.props.pokemon.id}</span>
        <div className="wrapper-secondary">
          <h2 className="card-name">{this.props.pokemon.name}</h2>
          <ul className="card-types">
            {this.props.pokemon.types.map((item, i) => {
              return (
                <li className="card-type" key={i}>{item.type.name.toUpperCase()}</li>
              )
            })}
          </ul>
          <h4 className="card-evolves">{this.state.evolvesFrom}</h4>
        </div>
      </div>
      
    )
  }
}
export default Card;