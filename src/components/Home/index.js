import React from 'react';

import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle">hello friends, I'm</h4>
                    <h1>Le<span id="mei">peng</span> Zhang</h1>
                    <h4 className="subtitle">Software Developer</h4>
                </h1>
               
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/assets/images/picture-of-me.jpeg`}
                    alt="Me"
                />
            </div>
        </div>
    )
}

export default Home;