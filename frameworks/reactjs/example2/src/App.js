import './App.css';
import GreetingsWithAndComponent from './components/AndOperator';
import ComponentWithUseState from './components/ComponentWithUseState';
import ListComponent from './components/ListComponent';
import GreetingsComponent from './components/TerneryOperator';

function App() {
  return (
    <>
      <GreetingsComponent value="true"/>
      <GreetingsComponent value="false"/>
      <hr/>
      <GreetingsWithAndComponent value="true"/>
      <GreetingsWithAndComponent value="false"/>
      <hr/>
      <ListComponent/>
      <hr/>
      <ComponentWithUseState/>
    </>
  );
}

export default App;