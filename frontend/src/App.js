import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";  
import { useAuthContext } from "./hooks/useAuthContext";
//pages+components
import Home from "./pages/Home";
import Header from './components/Header/Header'
import Login from "./pages/Login/Login"
import Signup from "./pages/SignUp/SignUp"

function App() {

  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={user?<Home /> : <Navigate to='/login' />}
            />
             <Route 
              path='/login'
              element={!user?<Login />: <Navigate to='/'/>}
            />
             <Route 
              path='/signup'
              element={!user?<Signup />: <Navigate to='/'/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
