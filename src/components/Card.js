import React, { Component } from 'react';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      cardInfo: []
    }
  }

  render() {
    return (
      <ul>
        <li>
          <img src="" alt=""/>
          <span></span>
          <h2>pokemon</h2>
          <span></span>
       </li>
      </ul>
      
    )
  }
}
export default Card;