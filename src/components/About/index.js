import React from 'react';

export const About = () => {
    return (
        <div className="about">
            <h2>Nice to meet you.</h2>
            <strong>
            Software developer leveraging business management background to build a more intuitive user experience on the web. 
            Recently earned a certificate in full stack development from the University of Central Florida,
            with newly developed skills in JavaScript, CSS, React.js, and responsive web design. 
            I am known as an innovative problem solver passionate about developing apps, focusing on mobile-first design and development. 
            With each project, my aim is best to engage my audience for an impactful user experience. 
            I applied aspects of UX and agile development in a recent project. 
            I worked on a team of four to develop a single-page MERN app that is a light-weight social networking site aimed at changing the way one communicates through purchasing credits earned through signing up, 
            likes received through posts made, and when directly purchasing credits.
            I'm excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 
            </strong>

            <h2 className="mt-5">Skills</h2>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    {/* <li></li>
                <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Frameworks/Libraries</strong>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                </div>
                <div>
                    <strong>Databases</strong>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    {/* <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Tools</strong>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Webpack</li>
                    <li>DevTools</li>
                </div>
            </div>
        </div>
    )
}

export default About;
