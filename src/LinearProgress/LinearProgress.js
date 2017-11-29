/**
 * @file LinearProgress component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';

import Percent from '../_Percent';

export default class LinearProgress extends Component {

    static  WordStyle = {
        FRONT: 'linear-progress-one',
        MIDDLE: 'linear-progress-two',
        FOLLOW: 'linear-progress-three'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.getProgressWidth = ::this.getProgressWidth;

    }

    getProgressWidth() {
        if (this.refs.progress) {
            return parseInt(this.refs.progress.offsetWidth) / 2;
        }
    }

    render() {
        const {className, highlightWidth, style, word, wordStyle, theme, animation} = this.props;

        const highlightStyle = {
            width: highlightWidth
        }, percentStyle = {
            marginLeft: this.getProgressWidth()
        };

        return (
            <div className={`linear-progress ${wordStyle} ${theme ? `theme-${theme}` : ''} ${className}`}
                 style={style}
                 ref="progress">
                {
                    word
                        ? (
                        wordStyle === LinearProgress.WordStyle.FOLLOW
                            ? <Percent endNum={parseInt(highlightWidth)}
                                       move={true}/>
                            : <Percent endNum={parseInt(highlightWidth)}/>
                    )
                        : null
                }
                <div className="linear-progress-background">
                    <div className={`linear-progress-highlight ${animation ? 'linear-progress-animate' : ''}`}
                         style={highlightStyle}>
                        {
                            wordStyle === LinearProgress.WordStyle.MIDDLE
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
    wordStyle: PropTypes.oneOf(Object.keys(LinearProgress.WordStyle).map((key) => LinearProgress.WordStyle[key])),

    /**
     * If true, the linearProgress will have animation.
     */
    animation: PropTypes.bool

};

LinearProgress.defaultProps = {

    className: '',
    style: {
        width: '200px',
        height: '2px'
    },

    highlightWidth: '50%',
    word: false,
    wordStyle: LinearProgress.WordStyle.FRONT,
    animation: false

};