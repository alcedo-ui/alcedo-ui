/**
 * @file LinearProgress component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Theme from '../Theme';
import Percent from '../_Percent';

import Util from '../_vendors/Util';

class LinearProgress extends Component {

    static WordStyle = {
        FRONT: 'linear-progress-one',
        MIDDLE: 'linear-progress-two',
        FOLLOW: 'linear-progress-three',
        END: 'linear-progress-four'
    };
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getProgressWidth = () => {
        if (this.refs.progress) {
            return parseInt(this.refs.progress.offsetWidth) / 2;
        }
    };

    render() {

        const {className, highlightWidth, style, word, wordStyle, theme, animation} = this.props,

            progressClassName = classNames('linear-progress', {
                [wordStyle]: wordStyle,
                [`theme-${theme}`]: theme,
                [className]: className
            }),

            highlightClassName = classNames('linear-progress-highlight', {
                'linear-progress-animate': animation
            }),
            highlightStyle = {
                width: highlightWidth
            },
            percentStyle = {
                marginLeft: this.getProgressWidth()
            };

        return (
            <div className={progressClassName}
                 style={style}
                 ref="progress">

                {
                    word && wordStyle === LinearProgress.WordStyle.FOLLOW ?
                        <Percent endNum={parseInt(highlightWidth)}
                                 move={true}/>
                        :
                        null
                }

                {
                    word && wordStyle === LinearProgress.WordStyle.FRONT ?
                        <Percent endNum={parseInt(highlightWidth)}/>
                        :
                        null
                }

                <div className="linear-progress-background">
                    <div className={highlightClassName}
                         style={highlightStyle}>
                        {
                            wordStyle === LinearProgress.WordStyle.MIDDLE ?
                                <Percent className="linear-progress-word"
                                         style={percentStyle}
                                         endNum={parseInt(highlightWidth)}/>
                                :
                                null
                        }
                    </div>
                </div>

                {
                    word && wordStyle === LinearProgress.WordStyle.END ?
                        <Percent endNum={parseInt(highlightWidth)}/>
                        :
                        null
                }

            </div>
        );
    }
}

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
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
    wordStyle: PropTypes.oneOf(Object.keys(LinearProgress.WordStyle).map(key => LinearProgress.WordStyle[key])),

    /**
     * If true, the linearProgress will have animation.
     */
    animation: PropTypes.bool

};

LinearProgress.defaultProps = {

    style: {
        width: '200px',
        height: '2px'
    },

    highlightWidth: '50%',
    word: false,
    wordStyle: LinearProgress.WordStyle.FRONT,
    animation: false

};

export default LinearProgress;