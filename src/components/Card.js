import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      cardInfo: []
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="card-wrapper">
        <img className="card-image" src={this.props.pokemon.sprites.front_default} alt=""/>
        <span className="card-id">ID/{this.props.pokemon.id}</span>
        <div className="wrapper-secondary">
          <h2>{this.props.pokemon.name}</h2>
          <ul>
            {this.props.pokemon.types.map((item, i) => {
              return (
                <li className="card-type" key={i}>{item.type.name.toUpperCase()}</li>
              )
            })}
          </ul>
        </div>
        
        
        
      </div>
      
    )
  }
}
export default Card;