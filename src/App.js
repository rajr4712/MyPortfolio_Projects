import React,{useState} from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Education from "./component/education/Education";
import Project from "./component/projects/Project";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import ScrollUp from "./component/scrollUp/ScrollUp";
import HashLoader from "react-spinners/HashLoader";


const App = () => {
  const [loading,setLoading] = useState(false);

  useState(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },4000)
  })
    return (
        <div>
 
        {
          loading ? 
          <div className="loader">                  {/*if loading true then show this - */}
          <HashLoader
            color="var(--text-color)"
            cssOverride={{}}
            loading
            speedMultiplier={1} />
        
      </div>
            :                   
          <>                                                 {/*if loading false then show all component */}
          <main className="main">
            <Header />
            <Home />
            <About />
            <Skills />
            <Education />
            <Project />
            <Contact />
          </main>
         
          <Footer />
          <ScrollUp />
          </>
        }

        </div>
       

          
        
    )
}

export default App;