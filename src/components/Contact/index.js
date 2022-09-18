import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's Connect!</h1>
            <iframe
                title="location"
                src="<iframe src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112222.13035515773!2d-81.41270509091292!3d28.481306146282268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1663524064749!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mengmei-tu/">
                    https://www.linkedin.com/in/lepeng-z/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mmeii">
                    https://github.com/goforward-z
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:zlepeng.ucf@gmail.com">
                        zlepeng.ucf@gmail
                </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="assets/Lepeng_Zhang_Resume.pdf">
                        Lepeng_Zhang_Resume
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:000-00-0000">
                        000-00-0000
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;