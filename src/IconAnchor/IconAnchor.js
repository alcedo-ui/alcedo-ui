import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading/CircularLoading';
import TouchRipple from '../TouchRipple/TouchRipple';

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

                <TouchRipple ref="touchRipple"
                             className={disabled || isLoading ? 'hidden' : ''}
                             displayCenter={true}/>

            </a>
        );

    }
};

IconAnchor.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The Icon Anchor theme.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * Icon anchor disabled.
     */
    disabled: PropTypes.bool,

    /**
     *
     */
    isLoading: PropTypes.bool,

    /**
     * Icon className.
     */
    iconCls: PropTypes.string,

    /**
     * The icon anchor linked url.
     */
    href: PropTypes.string,

    /**
     * Where to open the linked document.
     */
    target: PropTypes.string,

    /**
     * The function that trigger when the button is clicked.
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