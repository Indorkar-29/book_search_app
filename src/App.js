import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./components/Book";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book/>} />
        {/* <Route path="*" element={<h1>404, PAGE NOT FOUND</h1>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
