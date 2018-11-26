/**
 * @file ButtonRadio component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class ButtonRadio extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    clickHandler = () => {
        const {onClick} = this.props;
        onClick && onClick();
    };

    render() {

        const {
                className, style, theme,
                label, disabled, isChecked, onClick
            } = this.props,

            wrapperClassName = classNames('button-radio', {
                activated: isChecked,
                [className]: className
            });

        return (
            <RaisedButton className={wrapperClassName}
                          style={style}
                          theme={theme}
                          value={label}
                          disabled={disabled}
                          onClick={onClick}/>
        );

    }
}

ButtonRadio.propTypes = {

    /**
     * The ButtonCheckbox theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
    disabled: PropTypes.bool,

    isChecked: PropTypes.bool,

    onClick: PropTypes.func

};

ButtonRadio.defaultProps = {
    disabled: false,
    isChecked: false
};

export default ButtonRadio;
