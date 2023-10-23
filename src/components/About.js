import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am a Computer Science student with a strong academic record and a passion for web development, seeking the web developer position at [Company Name]. With hands-on experience in front-end and back-end development, proficiency in languages like HTML5, CSS, PHP, JavaScript, and Java, and a demonstrated ability to transform ideas into functional web applications, I am well-equipped to contribute to your team. My problem-solving skills, commitment to user-friendly design, and background in data analytics and research further enhance my qualifications. Additionally, my volunteer work reflects my dedication to community involvement. I am eager to discuss how my skills align with your company's goals and contribute to your projects.</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
