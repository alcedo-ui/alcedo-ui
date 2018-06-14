/**
 * @file Radio component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from '../IconButton';
import Theme from '../Theme';
import TipProvider from '../TipProvider';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class Radio extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            checked: !!props.checked
        };

    }

    clickHandler = e => {

        const {disabled, onClick} = this.props;

        if (disabled) {
            return;
        }

        onClick && onClick(e);

        let {checked} = this.state;
        if (checked) {
            const {onCheck} = this.props;
            onCheck && onCheck(e);
            return;
        }

        this.setState({
            checked: true
        }, () => {

            const {onChange, onCheck} = this.props;

            onChange && onChange(true);
            onCheck && onCheck(e);

        });

    };

    mouseDownHandler = e => {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.startRipple(e);
        this.clickHandler();

    };

    mouseUpHandler = e => {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.endRipple(e);

    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    render() {

        const {
                className, style, theme, name, label, value, uncheckedIconCls, checkedIconCls, disabled,
                disableTouchRipple, tip, tipPosition
            } = this.props,
            {checked} = this.state,

            radioClassName = classNames('radio', {
                activated: checked,
                [`theme-${theme}`]: theme,
                [className]: className
            });

        return (
            <TipProvider text={tip}
                         position={tipPosition}>

                <div className={radioClassName}
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

                    <div className="radio-icon-wrapper"
                         onClick={this.clickHandler}>
                        <IconButton ref="radioIcon"
                                    className="radio-bg-icon"
                                    iconCls={uncheckedIconCls}
                                    disabled={disabled}
                                    disableTouchRipple={disableTouchRipple}/>
                        <IconButton className="radio-icon"
                                    iconCls={checkedIconCls}
                                    disabled={disabled}
                                    disableTouchRipple={disableTouchRipple}/>
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

            </TipProvider>
        );

    }
}

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
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    tip: PropTypes.any,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * Callback function fired when the radio status change.
     */
    onChange: PropTypes.func,

    onCheck: PropTypes.func,
    onClick: PropTypes.func

};

Radio.defaultProps = {

    theme: Theme.DEFAULT,

    value: '',
    checked: false,
    uncheckedIconCls: 'far fa-circle',
    checkedIconCls: 'fas fa-dot-circle',
    disabled: false,
    disableTouchRipple: false,

    tipPosition: Position.BOTTOM

};

export default Radio;