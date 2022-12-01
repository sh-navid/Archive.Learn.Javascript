import A_WithContextHook from "./WithContext";
import A_WithoutContextHook from "./WithoutContext";

function App() {
  return (
    <>
      <A_WithoutContextHook/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <A_WithContextHook/>
    </>
  );
}

export default App;