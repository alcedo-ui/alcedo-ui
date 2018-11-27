/**
 * @file ButtonRadioSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../Dropdown';
import ButtonRadioGroup from '../ButtonRadioGroup';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class ButtonRadioSelect extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            popVisible: false,
            value: props.value
        };

    }

    changeHandler = value => {
        this.setState({
            value
        });
    };

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    render() {

        const {
                className, triggerClassName, popupClassName, style, theme,
                data
            } = this.props,
            {popVisible} = this.state,

            selectClassName = classNames('button-radio-select', {
                [className]: className
            }),
            btnClassName = classNames('button-radio-select-trigger', {
                [triggerClassName]: triggerClassName
            }),
            popClassName = classNames('button-radio-select-popup', {
                [popupClassName]: popupClassName
            });

        return (
            <Dropdown className={selectClassName}
                      triggerClassName={btnClassName}
                      popupClassName={popClassName}
                      theme={theme}
                      position={Dropdown.Position.RIGHT}
                      autoPopupWidth={false}>
                <ButtonRadioGroup data={data}
                                  theme={theme}
                                  onChange={this.changeHandler}/>
            </Dropdown>
        );

    }
}

ButtonRadioSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

    /**
     * The CSS class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The ButtonCheckbox theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The ButtonCheckbox activated theme.
     */
    activatedTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The hidden input name for form submit.
     */
    name: PropTypes.string,

    /**
     * Data for ButtonRadioGroup.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The className of RaisedButton.
         */
        className: PropTypes.string,

        /**
         * The style of RaisedButton.
         */
        style: PropTypes.object,

        /**
         * The label of RaisedButton.
         */
        label: PropTypes.any,

        /**
         * The value of RaisedButton.
         */
        value: PropTypes.any,

        /**
         * If true, the RaisedButton will be disabled.
         */
        disabled: PropTypes.bool

    })).isRequired,

    /**
     * Set one of the button activation.
     */
    value: PropTypes.any,

    /**
     * If true, the ButtonRadioGroup will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the popup is open.
     */
    onOpenPopup: PropTypes.func,

    /**
     * Callback function fired when the popup is close.
     */
    onClosePopup: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    /**
     * Callback function fired when click RaisedButton.
     */
    onChange: PropTypes.func

};

ButtonRadioSelect.defaultProps = {

    theme: Theme.DEFAULT,
    activatedTheme: Theme.PRIMARY,

    value: '',
    disabled: false

};

export default ButtonRadioSelect;
