import React from "react"
import {Link} from "react-router-dom"

export const Navigation = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo ml-2">Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/">Список дел</Link>
                </li>
                <li>
                    <Link to="/about">Информация</Link>
                </li>
            </ul>
        </div>
    </nav>
)