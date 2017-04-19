import React, {Component, PropTypes} from 'react';

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

    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    iconCls: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,

    onTouchTap: PropTypes.func

};

IconAnchor.defaultProps = {

    className: '',
    style: null,
    theme: '',

    disabled: false,
    isLoading: false,
    iconCls: '',
    href: '',
    target: '_blank'

};