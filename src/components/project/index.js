import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photoArt from '../../assets/projects/artWalkman.png';
import photoCalc from '../../assets/projects/calculation.png';
import photoGameMuffin from '../../assets/projects/gameMuffin.png';

function Project() {
   
  const currentCategory = [
         {
           name: "ArtWalkMan",
           description: "Project 1: Museum Virtual WalkThru",
           appLink: "https://surferstef.github.io/music-match"  
         },
         {
          name: "HTML Code Refactor",
          description: "Project 2: HTML Code Refactor",
          appLink: "https://surferstef.github.io/Challenge01-HTML-CSS-Git-Challenge/"  
         },
         {
          name: "Game-Muffin",
          description: "Project 3: Game Muffin MVC",
          appLink: "https://github.com/adamckennedy/game-bro"  
         }
       ];
      return (
    <section>
      <h1>My Projects</h1>
      <p>{currentCategory[0].name}</p>
      <div>
        <a>{currentCategory[0].description}</a>
          <img
            src={photoArt}
            alt="Project 1: Museum Virtual WalkThru"
            className="img-thumbnail mx-1"
            />
      </div>
      <p>{currentCategory[1].name}</p>
      <div>
        <a>{currentCategory[1].description}</a>
          <img
            src={photoCalc}
            alt="Project 1: Museum Virtual WalkThru"
            className="img-thumbnail mx-1"
            />
      </div>
      <p>{currentCategory[2].name}</p>
      <div>
        <a>{currentCategory[2].description}</a>
          <img
            src={photoGameMuffin}
            alt="Project 3: Game Muffin MVC"
            className="img-thumbnail mx-1"
            />
      </div>
    </section>
  );
}
export default Project;