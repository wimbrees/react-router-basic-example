import React, { Component } from 'react';

import { Link, IndexLink } from 'react-router';

import NavLink from './NavLink';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/second">Second</NavLink></li>
                    <li><NavLink to="/second/asdf">Second Anything</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

// If not using NavLink, use IndexLink instead of Link when creating a link for IndexRoute