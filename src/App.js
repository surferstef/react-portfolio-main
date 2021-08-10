import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about'
//import Header from './components/about';
import Project from "./components/project";


function App() {
    const [currentTab, setCurrentTab] = useState('about');
    const renderTab = () => {
      switch(currentTab) {
        case "about":
          return <About />;
        case "portfolio":
          return <Portfolio />;
        case "contact":
          return <Contact />;
        case "resume":
          return <Resume />;
        default:
          return null;
      }
    };

    return (
      <div>
        <div>
           <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
        </div>
        <div>
           <main>
             {renderTab()}
            </main>
       </div>
       <div>
         <footer></footer>
       </div>  
   </div>
  );
}

export default App;