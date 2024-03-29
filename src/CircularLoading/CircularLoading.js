/**
 * @file CircularLoading component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import Theme from '../Theme';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class CircularLoading extends Component {

    static Size = {
        DEFAULT: '',
        SMALL: 'small',
        LARGE: 'large'
    };
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style, size, theme, type, weight} = this.props,
            border = {
                borderWidth: weight
            };

        return (
            <div className={classNames('circular-loading', {
                [`circular-loading-size-${size}`]: size,
                [className]: className
            })}
                 type={type}
                 style={style}>

                <div className="spinner">
                    <div className={`${theme} circle left border-${type}`}>
                        <div className={`${type ? type : 'solid'}`}
                             style={border}>

                        </div>
                    </div>
                    <div className="gap">
                        <div></div>
                    </div>
                    <div className={`${theme} circle right border-${type}`}>
                        <div className={`${type ? type : 'solid'}`}
                             style={border}>

                        </div>
                    </div>
                </div>

            </div>
        );

    }
}

CircularLoading.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Set the size of loading,can use small or large.
     */
    size: PropTypes.oneOf(Util.enumerateValue(CircularLoading.Size)),

    /**
     * Set the theme of loading,can use highlight,success,error,warning.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Set the CircularLoading border-width.
     */
    weight: PropTypes.number,

    /**
     * Set the border style of CircularLoading,can use solid,dotted.
     */
    type: PropTypes.string

};

CircularLoading.defaultProps = {
    size: CircularLoading.Size.DEFAULT,
    theme: '',
    width: '1',
    type: 'solid'
};

export default CircularLoading;
