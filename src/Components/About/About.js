import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Images/dummy-user.png'
const About = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    <img src={profile} className="rounded-circle" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Fajla Rabby Khan</h5>
                    <p class="card-text">I am still learning. I think ,I need to improve my self very hardly.To know more about me click here <a href="https://www.facebook.com/" target="_blank">My FB</a>,<a href="https://www.linkedin.com/" target="_blank"> My LinkedIn </a></p>
                </div>

            </div>
        </div>
    );
};

export default About;