import React from 'react';
import './socialMedia.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const SocialMedia = () => {
    return(
        <div className="socialMedia bg-white p-3 border">
            <div>
            <Link><i className="fab fa-2x fa-instagram mb-3"></i></Link>
            </div>
            <div>
            <Link> <i className="fab fa-2x fa-facebook mb-3"></i></Link>
            </div>
            <div>
            <Link><i className="fab fa-2x fa-twitter-square"></i></Link>
            </div>
        </div>

    )}

export default SocialMedia;

