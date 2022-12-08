import { Book, BookFunction } from "./components/Book";
import { Book2, Book2Function } from "./components/Book2";
import { Book3, Book3Function } from "./components/Book3";
import { Book4, Book4Function } from "./components/Book4";
import { Book5, Book5Function } from "./components/Book5";
import Book6 from "./components/Book6";

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
      <hr/>
      <Book4/>
      <Book4Function/>
      <hr/>
      <Book5>CONTENT</Book5>
      <Book5Function>CONTENT</Book5Function>
      <hr/>
      <Book6/>
    </>
  );
}

export default App;