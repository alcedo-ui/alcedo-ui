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
            checked: !!props.checked
        };

        this.touchTapHandler = ::this.touchTapHandler;
        this.mouseDownHandler = ::this.mouseDownHandler;
        this.mouseUpHandler = ::this.mouseUpHandler;

    }

    touchTapHandler() {

        let {checked} = this.state;

        if (checked) {
            return;
        }

        this.setState({
            checked: true
        }, () => {
            this.props.onChange && this.props.onChange(true);
        });

    }

    mouseDownHandler(e) {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.startRipple(e);
        this.touchTapHandler();

    }

    mouseUpHandler(e) {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.endRipple(e);

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
                className, style, theme, name, label, value,
                uncheckedIconCls, checkedIconCls, disabled
            } = this.props,
            {checked} = this.state,

            radioClassName = (checked ? ' activated' : '') + (theme ? ` theme-${theme}` : '')
                + (className ? ' ' + className : '');

        return (
            <div className={'radio' + radioClassName}
                 style={style}
                 disabled={disabled}>

                {
                    name ?
                        <input className="hidden-radio"
                               type="radio"
                               name={name}
                               value={value}
                               checked={checked}
                               onChange={() => {
                               }}/>
                        :
                        null
                }

                <div className="radio-icon-wrapper">
                    <IconButton ref="radioIcon"
                                className="radio-bg-icon"
                                iconCls={uncheckedIconCls}
                                onTouchTap={this.touchTapHandler}
                                disabled={disabled}/>

                    <IconButton className="radio-icon"
                                iconCls={checkedIconCls}
                                onTouchTap={this.touchTapHandler}
                                disabled={disabled}/>
                </div>

                {
                    label ?
                        <div className="radio-label"
                             onMouseDown={this.mouseDownHandler}
                             onMouseUp={this.mouseUpHandler}
                             onMouseLeave={this.mouseUpHandler}>
                            {label}
                        </div>
                        :
                        null
                }

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
     * Value for radio.
     */
    value: PropTypes.any,

    /**
     * If true,the radio will be checked.
     */
    checked: PropTypes.bool,

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

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    name: null,
    label: null,
    value: '',
    checked: false,
    uncheckedIconCls: 'fa fa-circle-o',
    checkedIconCls: 'fa fa-dot-circle-o',
    disabled: false

};