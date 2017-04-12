/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';
import Percent from '../CircularProgress/Percent'

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
        }, widthStyle = {
            left: this.props.highlightWidth
        };
        let divClass;
        switch (this.props.wordStyle){
            case 1:
                divClass = 'linear-progress-one';
                break;
            case 2:
                divClass = 'linear-progress-two';
                break;
            case 3:
                divClass = 'linear-progress-three';
                break;
        }
        return (
            <div className={"linear-progress " + divClass} style={this.props.style}>
                {this.props.wordStyle === 3 ? <Percent endNum={parseInt(this.props.highlightWidth)} move={true}/> : <Percent endNum={parseInt(this.props.highlightWidth)}/>}
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
    style: PropTypes.object,
    word: PropTypes.bool,
    wordStyle: PropTypes.number
};

LinearProgress.defaultProps = {
    highlightWidth: '50%',
    background: 'gray',
    highlight: 'blue',
    style: {
        width: '200px',
        height: '2px'
    },
    word: false,
    wordStyle: 1
};