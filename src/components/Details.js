import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Details.css';

class Details extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokemon: ''
    }
  }

  componentDidMount(){
    // '/details/:id' > this.props.match.params.id
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({
        pokemon: responseJSON
      })
    })
  }

  render() {
    return (
      <div className="details-wrapper">
      <Link to='/'>close</Link>
      { this.state.pokemon 
        ? <img className="details-image" src={this.state.pokemon.sprites.front_default} alt=""/>
        : ''
      }
      <span className="details-id">ID/{this.state.pokemon.id}</span>
      <div className="wrapper-secondary">
        <h2 className="details-name">{this.state.pokemon.name}</h2>
        <ul className="details-types">
          {this.state.pokemon ? this.state.pokemon.types.map((item, i) => {
            return (
              <li className="details-type" key={i}>{item.type.name.toUpperCase()}</li>
            )
          })
          : ''
        }
        </ul>
        <h4 className="details-list-header">Stats</h4>
        <ul className="details-stats">
          {this.state.pokemon ? this.state.pokemon.stats.map((item, i) => {
            return (
              <li className="details-stat" key={i}>{item.stat.name}: {item.base_stat}</li>
            )
          })
          : ''
        }
        </ul>
        <h4 className="details-list-header">Moves</h4>
        <ul className="details-moves">
          {this.state.pokemon ? this.state.pokemon.moves.map((item, i) => {
            return (
              <li className="details-move" key={i}>{item.move.name}</li>
            )
          })
          : ''
        }
        </ul>
      </div>
    </div>
    )
  }
}
export default Details;