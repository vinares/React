import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Btn from "./Btn"
import DateExample from "./DateExample"
import Input from './components/Input';
import RegisterForm from './components/RegisterForm';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  const date = new Date();

  return (
    <div className="App">
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Btn />
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
        <DateExample message={date.toLocaleTimeString()}></DateExample>
        <Input />
    </div>
  );
};

function JSX(){}
export default App;
