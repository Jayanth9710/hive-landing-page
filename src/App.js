import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Sidebar from "./Components/Sidebar/Sidebar";
import Tokenamics from "./Components/Tokenamics/Tokenamics";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Sidebar/>
<Routes>
<Route exact path="/" element={<LandingPage/>}/>
<Route exact path="/tokenamics" element={<Tokenamics/>}/>
</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
