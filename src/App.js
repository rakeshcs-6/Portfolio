
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
 
  return (
    <div className="main">
      <Navbar/>
      <Home/>
   <About/>
    </div>
  );
}

export default App;
