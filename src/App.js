
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";

function App() {
 
  return (
    <div className="main">
      <Navbar/>
      <Home/>
   <About/>
   <Skills/>
    </div>
  );
}

export default App;
