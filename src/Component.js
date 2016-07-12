import React, { Component } from 'react';

import { browserHistory } from 'react-router';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <div>WORKING OK WITH REACT HOT ENABLED</div>            
                <br/>    
                <button onClick={this.navigate}>Navigate to another page without "Link"</button>
            </div>
        );
    }

    navigate() {
        const path = "/second/qwerty";
        browserHistory.push(path);
    }
}
