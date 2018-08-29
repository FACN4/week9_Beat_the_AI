import React from "react";
import "../styles/gameStart";

export default class GameEnd extends React.Component {
  render() {
    const {changeAppState, gameResult} = this.props
    let message;
    let imgUrl;
    switch(gameResult) {
      case 'win':
        message = 'Congrats on winning!';
        imgUrl = 'https://user-images.githubusercontent.com/28222381/44797423-d8d4f500-abb7-11e8-8e46-8d09d6daaf38.png'
        break;
      case 'loss':
        message =  'Sorry, you lost';
        imgUrl = "https://user-images.githubusercontent.com/28222381/44797562-2b161600-abb8-11e8-9232-53c2f63bb377.png";
        break;
      case 'draw':
        message = 'Draw, try again';
        imgUrl = 'https://user-images.githubusercontent.com/28222381/44797718-87793580-abb8-11e8-8546-f380c8c6c7e2.png'
        break;
    }
    return (
      <div className="gameEnd">
        <p>{message}</p>
        <img src={imgUrl} alt="Game end message"/>
        <button onClick= {() => {changeAppState('gameStatus',1)}}>
          play again
        </button>
      </div>
    );
  }
}
