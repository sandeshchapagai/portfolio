import React from "react";
import mock01 from '../assets/images/medicineReminder.jpg';
import mock07 from '../assets/images/nagarikBadaptra.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.example.com/shoe-ecommerce" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.example.com/shoe-ecommerce" target="_blank" rel="noreferrer">
                        <h2>Shoe E-commerce Website</h2>
                    </a>
                    <p>Personal e-commerce site for selling shoes, offering a user-friendly interface for browsing, purchasing, and managing orders.</p>
                </div>
                <div className="project">
                    <a href="https://www.example.com/lions-club-district-325m" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.example.com/lions-club-district-325m" target="_blank" rel="noreferrer">
                        <h2>Lions Club District 325M Application</h2>
                    </a>
                    <p>Developed a comprehensive application to display information, agendas, and updates about Lions Club District 325M.</p>
                </div>
                <div className="project">
                    <a href="https://www.example.com/nagarik-badapatra" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.example.com/nagarik-badapatra" target="_blank" rel="noreferrer">
                        <h2>Nagarik Badapatra Application</h2>
                    </a>
                    <p>Created an app for metropolitan citizens to access office-related information and public services easily.</p>
                </div>
                <div className="project">
                    <a href="https://www.example.com/medicine-reminder" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.example.com/medicine-reminder" target="_blank" rel="noreferrer">
                        <h2>Medicine Reminder Application</h2>
                    </a>
                    <p>Developed an application to help users manage their medication schedules with timely reminders and dosage tracking.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
