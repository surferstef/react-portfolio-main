import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about'
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Project from './components/project';
//import Project from "./components/project";



// function App() {
//     const [currentTab, setCurrentTab] = useState('header');
//     const renderTab = () => {
//       switch(currentTab) {
//         case "about":
//           return <About />;
//         case "portfolio":
//           return <Portfolio />;
//         case "contact":
//           return <Contact />;
//         case "resume":
//           return <Resume />;
//         default:
//           return null;
//       }
//     };

//     return (
      
      
//       <div>
//         <div>
//           <Nav></Nav>
//            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
//         </div>
//         <div>
//            <main>
//              {renderTab()}
//             </main>
//        </div>
//        <div>
//          <footer></footer>
//        </div>  
//    </div>
  
//   );
// }

// function App() {
//   const [contactSelected, setContactSelected] = useState(false);

// return (
// <main>
// <Nav></Nav>
// {!contactSelected ? (
//   <>
//     <About></About>
//   </>
// ) : (
//     <Contact></Contact>
//   )}
 
// </main>
// );
// }

function App() {
  return(
  <main>
    <Nav></Nav>
   <About></About>
   <Contact></Contact>
   <Project></Project>
  </main>
  )
};
export default App;