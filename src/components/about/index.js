import React from 'react';
import coverImage from "../../assets/cover/sf-panorama.png";

function About() {
    return (
        <section>
            <img src={coverImage} className="my-2" style={{ width: "100%", height: '400px' }} alt="cover" />
        </section>
    );
}



export default About;