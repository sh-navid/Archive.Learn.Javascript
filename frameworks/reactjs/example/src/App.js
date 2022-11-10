import './App.css';
import ComponentWithChildren from './components/simple-component/ComponentWithChildren';
import ComponentWithCondition from './components/simple-component/ComponentWithCondition';
import SimpleComponent from './components/simple-component/SimpleComponent';
import SimpleComponent2 from './components/simple-component/SimpleComponent2';
import SimpleComponent3 from './components/simple-component/SimpleComponent3';
import ComponentInComponent from './components/simple-component/ComponentInComponent'
import ComponentWithEvent from './components/event-component/ComponentWithEvent'

function App() {
  return (
    <>
      <SimpleComponent />

      <hr/>

      <SimpleComponent2 />

      <hr/>

      <SimpleComponent3 />
      
      <hr/>
      
      <ComponentWithCondition num="200"/>
      
      <hr/>
      
      <ComponentWithCondition num="0"/>
      
      <hr/>
      
      <ComponentWithChildren>Hello world</ComponentWithChildren>

      <hr/>
      
      <ComponentInComponent/>

      <hr/>

      <ComponentWithEvent/>
    </>
  );
}

export default App;