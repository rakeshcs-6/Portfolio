
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";

function App() {
 
  return (
    <>
    <div className="main">
      <Navbar/>
      <Home/>
   <About/>
   <Skills/>
   <Experience/>
   
    </div>
    <Contact/>
    </>
  );
}

export default App;
