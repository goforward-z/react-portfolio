import React from 'react';

export const About = () => {
    return (
        <div className="about">
            <h2>Nice to meet you.</h2>
            <strong>
                I am an enthusiastic software developer with a passion for creating web
                applications and
                maintaining enhanced user experiences built on JavaScript technologies.
            </strong>

            <h2 className="mt-5">Skills</h2>
            <div className="content">
                <div>
                    <strong>Languages</strong>
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
