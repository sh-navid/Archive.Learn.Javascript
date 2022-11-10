import './App.css';
import GreetingsWithAndComponent from './components/AndOperator';
import GreetingsComponent from './components/TerneryOperator';

function App() {
  return (
    <>
      <GreetingsComponent value="true"/>
      <GreetingsComponent value="false"/>
      <hr/>
      <GreetingsWithAndComponent value="true"/>
      <GreetingsWithAndComponent value="false"/>
    </>
  );
}

export default App;