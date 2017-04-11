/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import './LinearProgress.css';

export default class LinearProgress extends Component{
    constructor(props) {
        super();
    }
    render() {
        const backgroundStyle = {
            background: this.props.background
        }, highlightStyle = {
            background: this.props.highlight,
            width: this.props.highlightWidth
        };
        return (
            <div className="linear-progress" style={this.props.style}>
                <div className="linear-progress-background" style={backgroundStyle}>
                    <div className="linear-progress-highlight" style={highlightStyle}>
                    </div>
                </div>
            </div>
        )
    }
}

LinearProgress.propTypes = {
    highlightWidth: PropTypes.string,
    background: PropTypes.string,
    highlight: PropTypes.string,
    style: PropTypes.object
};

LinearProgress.defaultProps = {
    highlightWidth: '50%',
    background: 'gray',
    highlight: 'blue',
    style: {
        width: '200px',
        height: '2px'
    }
};