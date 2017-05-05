/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';

import Percent from '../CircularProgress/Percent';

import './LinearProgress.css';

export default class LinearProgress extends Component {
    constructor(props) {
        super();

        this.getProgressWidth = this :: this.getProgressWidth;
    }

    getProgressWidth() {
        if (this.refs.progress) {
            return parseInt(this.refs.progress.offsetWidth) / 2;
        }
    }

    render() {
        const {className, highlightWidth, style, word, wordStyle, theme} = this.props;
        const {WordStyle} = LinearProgress;

        const highlightStyle = {
            width: highlightWidth
        }, percentStyle = {
            marginLeft: this.getProgressWidth()
        };
        let divClass = WordStyle[wordStyle];

        return (
            <div className={`linear-progress ${divClass} ${theme ? `theme-${theme}` : ''} ${className}`}
                 style={style}
                 ref="progress">
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
                <div className="linear-progress-background">
                    <div className="linear-progress-highlight"
                         style={highlightStyle}>
                        {
                            wordStyle === 'middle'
                                ? <Percent endNum={parseInt(highlightWidth)}
                                           className="linear-progress-word"
                                           style={percentStyle}/>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
};

LinearProgress.WordStyle = {
    front: 'linear-progress-one',
    middle: 'linear-progress-two',
    follow: 'linear-progress-three'
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
     * The progress theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The highlight width of linearProgress.
     */
    highlightWidth: PropTypes.string,

    /**
     * If true,there will have a text description.
     */
    word: PropTypes.bool,

    /**
     * The percent text location.Desirable values include front,middle,follow.
     */
    wordStyle: PropTypes.oneOf(Object.keys(LinearProgress.WordStyle))

};

LinearProgress.defaultProps = {
    className: '',
    style: {
        width: '200px',
        height: '2px'
    },

    highlightWidth: '50%',
    word: false,
    wordStyle: 'front'
};