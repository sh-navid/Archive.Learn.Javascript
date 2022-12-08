import { Book, BookFunction } from "./components/Book";
import { Book2, Book2Function } from "./components/Book2";
import { Book3, Book3Function } from "./components/Book3";

function App() {
  return (
    <>
      <Book/>
      <BookFunction/>
      <hr/>
      <Book2/>
      <Book2Function/>
      <hr/>
      <Book3/>
      <Book3Function/>
    </>
  );
}

export default App;