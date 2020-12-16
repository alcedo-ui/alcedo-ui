/**
 * @file Checkbox component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import IconButton from '../IconButton';
import TipProvider from '../TipProvider';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class Checkbox extends Component {

    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            checked: ComponentUtil.getDerivedState(props, state, 'checked')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.checkboxIcon = createRef();

        this.state = {
            checked: !!props.checked
        };

    }

    componentDidMount() {
        this.checkboxIconInstance = this.checkboxIcon && this.checkboxIcon.current;
    }

    clickHandler = e => {

        if (this.props.beforeChange?.() === false) {
            return;
        }

        const {disabled, onClick} = this.props;

        if (disabled) {
            return;
        }

        onClick && onClick(e);

        const checked = !this.state.checked;

        this.setState({
            checked
        }, () => {

            const {onChange, onCheck, onUncheck} = this.props;

            onChange && onChange(checked);

            if (checked) {
                onCheck && onCheck(e);
            } else {
                onUncheck && onUncheck(e);
            }

        });

    };

    mouseDownHandler = e => {

        if (this.props.disabled) {
            return;
        }

        this.checkboxIconInstance && this.checkboxIconInstance.startRipple(e);
        this.clickHandler();

    };

    mouseUpHandler = () => {

        if (this.props.disabled) {
            return;
        }

        this.checkboxIconInstance && this.checkboxIconInstance.endRipple();

    };

    render() {

        const {
                className, style, theme, name, label, value, disabled, disableTouchRipple,
                indeterminate, uncheckedIconCls, checkedIconCls, indeterminateIconCls, tip, tipPosition
            } = this.props,
            {checked} = this.state;

        return (
            <TipProvider tipContent={tip}
                         position={tipPosition}>

                <div className={classNames('checkbox', {
                    activated: checked,
                    indeterminated: !checked && indeterminate,
                    [`theme-${theme}`]: theme,
                    [className]: className
                })}
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

                    <div className="checkbox-icon-wrapper"
                         onClick={this.clickHandler}>
                        <IconButton ref={this.checkboxIcon}
                                    className="checkbox-bg-icon"
                                    iconCls={uncheckedIconCls}
                                    disabled={disabled}
                                    disableTouchRipple={disableTouchRipple}/>
                        <IconButton className="checkbox-indeterminate-icon"
                                    iconCls={indeterminateIconCls}
                                    disabled={disabled}
                                    disableTouchRipple={disableTouchRipple}/>
                        <IconButton className="checkbox-icon"
                                    iconCls={checkedIconCls}
                                    disabled={disabled}
                                    disableTouchRipple={disableTouchRipple}/>
                    </div>

                    {
                        label ?
                            <div className="checkbox-label"
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
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    tip: PropTypes.any,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * Callback function fired when the checkbox status change.
     */
    onChange: PropTypes.func,

    beforeChange: PropTypes.func,
    onClick: PropTypes.func,
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func

};

Checkbox.defaultProps = {

    theme: Theme.DEFAULT,

    value: '',
    checked: false,
    indeterminate: false,
    uncheckedIconCls: 'far fa-square',
    checkedIconCls: 'fas fa-check-square',
    indeterminateIconCls: 'fas fa-minus-square',
    disabled: false,
    disableTouchRipple: false,

    tipPosition: Position.BOTTOM

};

export default Checkbox;
