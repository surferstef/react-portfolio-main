import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about'
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Project from './components/project';
//import Footer from './components/footer';
//import Project from "./components/project";



function App() {
const [categories] = useState([
  {
      name: "About Me",
      description: "Brief Bio about Stefan.",
  },
  {
      name: " Portfolio",
      description: "Portfolio of coding work I have completed!",
  },
  {
      name: "Contact",
      description: "My Contact Information",
  },
  {
      name: "Resume",
      description: "My Resume",
  },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);
const renderTab = () => {
  switch (currentCategory) {
    case "about":
      return <About />;
    case "portfolio":
      return <Project />;
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
    <Nav
      categories={categories}      
       setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
     ></Nav>
    <div>
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
    </div>
    <div>
      <main>{renderTab()}</main>
    </div>
   
  </div>
);
// return (
  
//   <div>
//     <Nav
//       categories={categories}
//       setCurrentCategory={setCurrentCategory}
//       currentCategory={currentCategory}
//     ></Nav>
//     <main>
//       <div>
//         <About></About>
//         <Contact></Contact>
//         <Project></Project>
//       </div>
//     </main>
//   </div>

}


// function App() {
//     const [currentTab, setCurrentTab] = useState('about');
//     const renderTab = () => {
//       switch(currentTab) {
//         case "about":
//           return <About />;
//         case "portfolio":
//           return <Project />;
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
//            <main>{renderTab()}</main>
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

// function App() {
//   return(
//   <main>
//     <Nav></Nav>
//    <About></About>
//    <Contact></Contact>
//    <Project></Project>
//   </main>
//   )
// };
export default App;