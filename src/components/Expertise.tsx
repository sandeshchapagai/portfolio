import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFlutter = [
    "Flutter",
    "Dart",
    "BLoC",
    "State Management",
    "API Handling",
    "Firebase",
    "SQLite",
    "REST APIs",
    "JSON",
    "Cross-Platform Development"
];

const labelsBackend = [
    "Spring Boot",
    "Java",
    "RESTful Services",
    "MySQL",
    "Maven",
    "Hibernate"
];

const labelsReact = [
    "React",
    "JavaScript",
    "JSX",
    "CSS",
    "Component-Based Architecture"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMobileAlt} size="3x"/>
                    <h3>Flutter Development</h3>
                    <p>I specialize in developing high-quality, performant, and visually appealing mobile applications using Flutter. With deep knowledge of BLoC state management and API handling, I can tackle a wide variety of tasks in Flutter development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFlutter.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Backend Development (Learning Phase)</h3>
                    <p>I am currently expanding my expertise in backend development, focusing on building RESTful services using Spring Boot. This includes working with databases and deploying scalable backend systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsBackend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>React Development (Basic Knowledge)</h3>
                    <p>Alongside Flutter, I have foundational knowledge of React for building web applications. This includes working with components, JSX, and styling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsReact.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
