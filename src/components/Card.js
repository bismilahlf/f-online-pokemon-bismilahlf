import React, { Component } from 'react';

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
      <div>
        <img src={this.props.pokemon.sprites.front_default} alt=""/>
        <span>ID/{this.props.pokemon.id}</span>
        <h2>{this.props.pokemon.name}</h2>
        <ul>
          {this.props.pokemon.types.map((item, i) => {
            return (
              <li key={i}>{item.type.name}</li>
            )
          })}
        </ul>
        
        
      </div>
      
    )
  }
}
export default Card;