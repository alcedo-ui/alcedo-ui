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
            checked: !!props.checked
        };

        this.touchTapHandler = ::this.touchTapHandler;
        this.mouseDownHandle = ::this.mouseDownHandle;
        this.mouseUpHandle = ::this.mouseUpHandle;

    }

    touchTapHandler() {

        const checked = !this.state.checked;

        this.setState({
            checked
        }, () => {
            this.props.onChange && this.props.onChange(checked);
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
        if (nextProps.checked !== this.state.checked) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    render() {

        const {
                className, style, theme, name, label, value, disabled, indeterminate,
                uncheckedIconCls, checkedIconCls, indeterminateIconCls
            } = this.props,
            {checked} = this.state,

            checkboxClassName = (checked ? ' activated' : '') + (indeterminate ? ' indeterminated' : '')
                + (theme ? ` theme-${theme}` : '') + (className ? ' ' + className : '');

        return (
            <div className={'checkbox' + checkboxClassName}
                 style={style}
                 disabled={disabled}>

                {
                    name ?
                        <input className="hidden-checkbox"
                               type="checkbox"
                               name={name}
                               value={value}
                               checked={checked}
                               onChange={() => {
                               }}/>
                        :
                        null
                }

                <div className="checkbox-icon-wrapper">

                    <IconButton ref="checkboxIcon"
                                className="checkbox-bg-icon"
                                iconCls={uncheckedIconCls}
                                onTouchTap={this.touchTapHandler}
                                disabled={disabled}/>

                    <IconButton className="checkbox-icon"
                                iconCls={indeterminate ? indeterminateIconCls : checkedIconCls}
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
     * Value for checkbox.
     */
    value: PropTypes.any,

    /**
     * If true,the checkbox will be checked.
     */
    checked: PropTypes.bool,

    indeterminate: PropTypes.bool,

    uncheckedIconCls: PropTypes.string,
    checkedIconCls: PropTypes.string,
    indeterminateIconCls: PropTypes.string,

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

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    name: null,
    label: null,
    value: '',
    checked: false,
    indeterminate: false,
    uncheckedIconCls: 'fa fa-square-o',
    checkedIconCls: 'fa fa-check-square',
    indeterminateIconCls: 'fa fa-minus-square',
    disabled: false

};