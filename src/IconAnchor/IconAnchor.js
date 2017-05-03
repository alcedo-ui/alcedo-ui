import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';
import Theme from '../Theme';

import './IconAnchor.css';

export default class IconAnchor extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

    }

    clickHandle(e) {
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    render() {

        const {className, style, theme, iconCls, disabled, isLoading, href, target} = this.props;

        return (
            <a className={`icon-anchor ${theme ? `theme-${theme}` : ''} ${className}`}
               style={style}
               href={href ? href : 'javascript:void(0)'}
               target={target}
               disabled={disabled || isLoading}
               onClick={this.clickHandle}>

                {
                    iconCls ?
                        (
                            isLoading
                                ? <CircularLoading size="small"/>
                                : <i className={`icon-anchor-icon ${iconCls}`}
                                     aria-hidden="true"></i>
                        )
                        :
                        null
                }

                {
                    disabled || isLoading ?
                        null
                        :
                        <TouchRipple ref="touchRipple"
                                     className={disabled || isLoading ? 'hidden' : ''}
                                     displayCenter={true}/>
                }

            </a>
        );

    }
};

IconAnchor.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The button theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * Disables the button if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon.
     */
    iconCls: PropTypes.string,

    /**
     * The URL to link to when the button is clicked.
     */
    href: PropTypes.string,

    /**
     * How to open the linked document.The value can be _blank,_self,_parent or _top.
     */
    target: PropTypes.string,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onTouchTap: PropTypes.func

};

IconAnchor.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    disabled: false,
    isLoading: false,
    iconCls: '',
    href: '',
    target: '_blank'

};