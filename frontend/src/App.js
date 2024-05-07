import {BrowserRouter, Routes, Route} from "react-router-dom";  

//pages+components
import Home from "./pages/Home";
import ItemCard from "./components/ItemCard/ItemCard";
import ItemForm from"./components/ItemForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route 
          path='/'
          element={<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
