import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

const [currentCategory, setCurrentCategory] = useState(categories[0]);
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
function Nav() {

    return (
  <header> 
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a>
            Stefan Hall
          </a>
        </li>
        
        {categories.map((category) => (
          <li className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'
              }`} key={category.name}>
            <span
              onClick={() => {
                setCurrentCategory(category)
              }}
            >
              {capitalizeFirstLetter(category.name)}
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