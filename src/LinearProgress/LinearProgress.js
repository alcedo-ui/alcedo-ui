/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Percent from '../CircularProgress/Percent';

import './LinearProgress.css';

export default class LinearProgress extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {highlightWidth, background, highlight, style, word, wordStyle} = this.props;

        const backgroundStyle = {
            background: background
        }, highlightStyle = {
            background: highlight,
            width: highlightWidth
        };
        let divClass;
        switch (wordStyle) {
            case 'front':
                divClass = 'linear-progress-one';
                break;
            case 'middle':
                divClass = 'linear-progress-two';
                break;
            case 'follow':
                divClass = 'linear-progress-three';
                break;
        }

        return (
            <div className={'linear-progress ' + divClass}
                 style={style}>
                {
                    word
                        ? (
                        wordStyle === 'follow'
                            ? <Percent endNum={parseInt(highlightWidth)}
                                       move={true}/>
                            : <Percent endNum={parseInt(highlightWidth)}/>
                    )
                        : null
                }
                <div className="linear-progress-background"
                     style={backgroundStyle}>
                    <div className="linear-progress-highlight"
                         style={highlightStyle}>
                    </div>
                </div>
            </div>
        );
    }
};

LinearProgress.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The highlight width of linearProgress.
     */
    highlightWidth: PropTypes.string,

    /**
     * The background color of linearProgress.
     */
    background: PropTypes.string,

    /**
     * The highlight color of linearProgress.
     */
    highlight: PropTypes.string,

    /**
     * If true,there will have a text description.
     */
    word: PropTypes.bool,

    /**
     * The percent text location.
     */
    wordStyle: PropTypes.string

};

LinearProgress.defaultProps = {
    className: '',
    style: {
        width: '200px',
        height: '2px'
    },

    highlightWidth: '50%',
    background: 'gray',
    highlight: 'blue',
    word: false,
    wordStyle: 'front'
};