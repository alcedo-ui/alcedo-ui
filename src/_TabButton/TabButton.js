/**
 * @file TabsButton component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlatButton from '../FlatButton';

class TabButton extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleMouseDown = e => {
        const {data, index, onMouseDown} = this.props;
        onMouseDown && onMouseDown(data, index, e);
    };

    handleMouseUp = e => {
        const {data, index, onMouseUp} = this.props;
        onMouseUp && onMouseUp(data, index, e);
    };

    handleClick = e => {
        const {data, index, onClick} = this.props;
        onClick && onClick(data, index, e);
    };

    render() {

        const {className, style, index, isTabFullWidth, data, activatedIndex, ...restProps} = this.props;

        return (
            <FlatButton {...restProps}
                        className={classNames('tab-button', {
                            [className]: className
                        })}
                        style={style}
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}
                        onClick={this.handleClick}/>
        );

    }
}

TabButton.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the TabsItem.
     */
    data: PropTypes.shape({

        /**
         * The text value of the tab.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the tab will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the tab will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true,the element's ripple effect will be disabled.
         */
        disableTouchRipple: PropTypes.bool,

        /**
         * Use this property to display an icon.It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * The position of the icon.
         */
        iconPosition: PropTypes.string,

        /**
         * The render content in tab.
         */
        renderer: PropTypes.any,

        /**
         * Callback function fired when click onActive tab.
         */
        onActive: PropTypes.func

    }).isRequired,

    /**
     * Activated tab index.
     */
    activatedIndex: PropTypes.number,
    index: PropTypes.number,

    /**
     * If true,the data is FullWidth.
     */
    isTabFullWidth: PropTypes.bool,

    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onClick: PropTypes.func

};

TabButton.defaultProps = {
    activatedIndex: 0,
    index: 0,
    isTabFullWidth: true
};

export default TabButton;
