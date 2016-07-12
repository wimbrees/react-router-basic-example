import React, { Component } from 'react';

import { Link } from 'react-router';

export class SecondComponent extends Component {
    render() {
        return (
            <div>
                <div>SECOND COMPONENT</div>
                {this.props.children}
            </div>
        );
    }
}

