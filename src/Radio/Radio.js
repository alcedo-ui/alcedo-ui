/**
 * @file Radio component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Radio extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: !!props.value
        };

        this.clickHandle = ::this.clickHandle;
        this.mouseDownHandle = ::this.mouseDownHandle;
        this.mouseUpHandle = ::this.mouseUpHandle;

    }

    clickHandle() {

        let {value} = this.state;

        if (value) {
            return;
        }

        this.setState({
            value: true
        }, () => {
            this.props.onChange && this.props.onChange(true);
        });

    }

    mouseDownHandle(e) {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.startRipple(e);
        this.clickHandle();

    }

    mouseUpHandle() {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.endRipple();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, theme, name, label, uncheckedIconCls, checkedIconCls, disabled} = this.props,
            {value} = this.state,

            radioClassName = (value ? ' activated' : '') + (theme ? ` theme-${theme}` : '')
                + (className ? ' ' + className : '');

        return (
            <div className={'radio' + radioClassName}
                 style={style}
                 disabled={disabled}>

                <input type="hidden"
                       name={name}
                       value={value}/>

                <div className="radio-icon-wrapper">
                    <IconButton ref="radioIcon"
                                className="radio-bg-icon"
                                iconCls={uncheckedIconCls}
                                onTouchTap={this.clickHandle}
                                disabled={disabled}/>

                    <IconButton className="radio-icon"
                                iconCls={checkedIconCls}
                                onTouchTap={this.clickHandle}
                                disabled={disabled}/>
                </div>

                <div className="radio-label"
                     onMouseDown={this.mouseDownHandle}
                     onMouseUp={this.mouseUpHandle}
                     onMouseLeave={this.mouseUpHandle}>
                    {label}
                </div>

            </div>
        );

    }
};

Radio.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The Radio theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the radio.
     */
    name: PropTypes.string,

    /**
     * Label for radio.
     */
    label: PropTypes.any,

    /**
     * If true,the radio will be checked.
     */
    value: PropTypes.bool,

    uncheckedIconCls: PropTypes.string,
    checkedIconCls: PropTypes.string,

    /**
     * If true, the radio will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the radio status change.
     */
    onChange: PropTypes.func

};

Radio.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    name: '',
    label: '',
    value: false,
    uncheckedIconCls: 'fa fa-circle-o',
    checkedIconCls: 'fa fa-dot-circle-o',
    disabled: false

};