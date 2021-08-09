import React from 'react';

const categories = [
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
];

// function Nav() {
//     return (
//  <body>
//     <main>
//     <header class="header">
//         <h1>
//             <a>Stefan Hall</a>
//          </h1>
//           <nav>
//             <ul className="flex-row">
//                 <li lassName="mx-2">
//                     <a href="#about-me">About Me</a>
//                 </li>
//                 <li lassName="mx-2">
//                     <a href="#portfolio">Portfolio</a>
//                 </li>
//                 <li lassName="mx-2">
//                     <a href="#contact-me">Contact Me</a>
//                 </li>
//                 <li lassName="mx-2">
//                     <a href="#resume">Resume</a>
//                 </li>
//                 {categories.map((category) => (
//                  <li
//                   className="mx-1"
//                   key={category.name}
//                   >
//                    <span onClick={categorySelected} >
//                   {category.name}
//                   </span>
//         </li>
//       ))}
//             </ul>
//         </nav>    
//     </header>
//     <section class="hero"></section>
//    </main>
// </body>
//     )
// }

function Nav() {

    return (
      <header>
   
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">
            About me
          </a>
        </li>
        <li>
          <span>Contact</span>
        </li>
        {categories.map((category) => (
          <li
            className="mx-1"
            key={category.name}
          >
            <span onClick={categorySelected} >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  </header>
    );
  }


function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  
  {categories.map((category) => (
    <li
      className="mx-1"
      key={category.name}
    >
      <span onClick={() => categorySelected(category.name)} >
        {category.name}
      </span>
    </li>
  ))}


export default Nav;