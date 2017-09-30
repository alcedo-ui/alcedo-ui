/**
 * @file Checkbox component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Checkbox extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: !!props.value
        };

        this.touchTapHandler = ::this.touchTapHandler;
        this.mouseDownHandle = ::this.mouseDownHandle;
        this.mouseUpHandle = ::this.mouseUpHandle;

    }

    touchTapHandler() {

        const value = !this.state.value;

        this.setState({
            value
        }, () => {
            this.props.onChange && this.props.onChange(value);
        });

    }

    mouseDownHandle(e) {

        if (this.props.disabled) {
            return;
        }

        this.refs.checkboxIcon.startRipple(e);
        this.touchTapHandler();

    }

    mouseUpHandle() {

        if (this.props.disabled) {
            return;
        }

        this.refs.checkboxIcon.endRipple();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, theme, name, label, disabled, indeterminate} = this.props,
            {value} = this.state,

            checkboxClassName = (value ? ' activated' : '') + (indeterminate ? ' indeterminated' : '')
                + (theme ? ` theme-${theme}` : '') + (className ? ' ' + className : '');

        return (
            <div className={'checkbox' + checkboxClassName}
                 style={style}
                 disabled={disabled}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                <div className="checkbox-icon-wrapper">

                    <IconButton ref="checkboxIcon"
                                className="checkbox-bg-icon"
                                iconCls="fa fa-square-o"
                                onTouchTap={this.touchTapHandler}
                                disabled={disabled}/>

                    <IconButton className="checkbox-icon"
                                iconCls={`fa ${indeterminate ? 'fa fa-minus-square' : 'fa-check-square'}`}
                                onTouchTap={this.touchTapHandler}
                                disabled={disabled}/>

                </div>

                <div className="checkbox-label"
                     onMouseDown={this.mouseDownHandle}
                     onMouseUp={this.mouseUpHandle}
                     onMouseLeave={this.mouseUpHandle}>
                    {label}
                </div>

            </div>
        );

    }
};

Checkbox.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The Checkbox theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the checkbox.
     */
    name: PropTypes.string,

    /**
     * Label for checkbox.
     */
    label: PropTypes.any,

    /**
     * If true,the checkbox will be checked.
     */
    value: PropTypes.bool,

    indeterminate: PropTypes.bool,

    /**
     * If true, the checkbox will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the checkbox status change.
     */
    onChange: PropTypes.func

};

Checkbox.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    name: '',
    label: '',
    value: false,
    indeterminate: false,
    disabled: false

};