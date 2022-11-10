import './App.css';
import ComponentWithChildren from './components/simple-component/ComponentWithChildren';
import ComponentWithCondition from './components/simple-component/ComponentWithCondition';
import SimpleComponent from './components/simple-component/SimpleComponent';
import SimpleComponent2 from './components/simple-component/SimpleComponent2';
import SimpleComponent3 from './components/simple-component/SimpleComponent3';

function App() {
  return (
    <>
      <SimpleComponent />
      <SimpleComponent2 />
      <SimpleComponent3 />
      <ComponentWithCondition num="200"/>
      <ComponentWithCondition num="0"/>
      <ComponentWithChildren>Hello world</ComponentWithChildren>
    </>
  );
}

export default App;