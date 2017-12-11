import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">Home</li>
                        <li><a href="">User</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
