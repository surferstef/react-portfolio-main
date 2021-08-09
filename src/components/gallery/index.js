import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';
//import photo from "../../assets/small/commercial/0.jpg";

function Gallery() {
   
      const currentCategory = {
          name: "commercial",
          description:
          "Photos of grocery stores, food trucks, and other commercial projects",
        };
      return (
    <section> 
      
      <p>{currentCategory.name}</p>
      <div>
      
      </div>
    </section>
  );
}
export default Gallery;