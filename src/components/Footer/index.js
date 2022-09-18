import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lepeng-z/">
                <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/goforward-z">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:zlepeng.ucf@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/">
                <i class="fas fa-file-pdf"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="tel:000-00-0000">
                <i class="fas fa-phone-volume"></i>
            </a><p>Copyright © Lepeng Z. | goforward-z</p>
        </footer>
    )
}

export default Footer