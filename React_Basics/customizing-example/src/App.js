import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Btn from "./Btn"
import DateExample from "./DateExample"
import Input from './components/Input';
import RegisterForm from './components/RegisterForm';
import React from 'react';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import Accordion from './components/Accordion';
import CurrentMessage from './components/CurrentMessage';
import lemon from "./assets/lemon.png";
import MyVideo from './components/MyVideo';
import ReactPlayer from 'react-player';

function ToggleVideo() {
  const bird1 = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );
  
  const bird2 = new Audio(
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );
  
  const toggle1 = () => {
      if (bird1.paused) {
          bird2.pause();
          bird1.play();
      } else {
          bird1.pause();
      }
  };

  const toggle2 = () => {
      if (bird2.paused) {
          bird1.pause();
          bird2.play();
      } else {
          bird2.pause();
      }
  };
  

  return (
      <><button onClick={toggle1}>Caspian Tern 1</button><button onClick={toggle2}>Caspian Tern 2</button></>
  );
};

function PlayVideo() {
  return (
    <ReactPlayer
      url={"https://www.twitch.tv/covertgoblue"}
      playing={false}
      volume={0.5} />
  );
}


function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  const date = new Date();
  const day = date.getDay();

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Btn />
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
        <DateExample message={date.toLocaleTimeString()}></DateExample>
        <Input />
        <Accordion />
        <CurrentMessage day={day} />
        <img src={lemon} alt="Lemon" />
        <PlayVideo />
        <ToggleVideo />
    </div>
  );
};

function JSX(){}
export default App;
