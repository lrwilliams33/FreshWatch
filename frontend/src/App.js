import {BrowserRouter, Routes, Route} from "react-router-dom";  

//pages+components
import Home from "./pages/Home";
import Header from './components/Header/Header'
import ItemCard from "./components/ItemCard/ItemCard"
import ItemForm from"./components/ItemForm/ItemForm"
import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/SignUp"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
             <Route 
              path='/login'
              element={<Login />}
            />
             <Route 
              path='/signup'
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
