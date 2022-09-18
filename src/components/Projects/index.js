import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/florida_travel.jpg`} className="card-img-top border-bottom"
                                alt="Screenshot of florida_travel" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Florida Travel Blog</h3>
                            <p className="card-text">
                            This is a front and backend for a blog site to share different cultural areas in Florida.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express, Handlebars, MySQL,
                                    Sequelize, Mobile responsive
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://calm-eyrie-85145.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/quicksilver524/cultural-florida-travel-blog" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/Organizer_Notifier.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Eat-Da-Burger" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Organizer Notifier</h3>
                            <p className="card-text">
                                A app that lets users input the items for carpentry business.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML,CSS,JaveScript,jQuery,serverSide APIs,TailWind,
                                    mobile responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://smazariego.github.io/Project-Organizer-Notifier/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/SMazariego/Project-Organizer-Notifier.git" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/shop_shop.png`} className="card-img-top border-bottom"
                            alt="Screenshot of shop shop project" />
                        <div className="card-body mb-5 pl-0">
                            <h3>Shop-Shop</h3>
                            <p className="card-text">
                                A e-commerce shopping website
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript,node.js,express,MongoDB,stripe,graphQL,HTML,CSS
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://intense-headland-80720.herokuapp.com/" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/goforward-z/shop-shop.git" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/budget_tracker.png`} className="card-img-top border-bottom"
                                alt="Screenshot of budget tracker" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Budget Tracker</h3>
                            <p className="card-text">
                                An application that allows users to add expenses and deposits to their budget with or without a connection.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript,Node,Express,HTML,CSS,service worker,indexeDB,MongoDB
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://radiant-retreat-35223.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/goforward-z/budget-tracker.git" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weather.jpg`} className="card-img-top border-bottom"
                                alt="Screenshot of Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                                Weather app that provides current and future weather forecasts in cities.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile
                                    responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://goforward-z.github.io/weather-dashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/goforward-z/weather-dashboard.git" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/coding.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Code Quiz" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Code Quiz</h3>
                            <p className="card-text">
                                A timed quiz on JavaScript fundamentals that stores high scores.
                        </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://goforward-z.github.io/code-quiz/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/goforward-z/code-quiz.git" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;