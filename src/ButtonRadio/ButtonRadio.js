/**
 * @file ButtonRadio component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class ButtonRadio extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler() {
        const {data, onTouchTap} = this.props;
        onTouchTap && onTouchTap(data);
    }

    render() {

        const {theme, data, disabled, isChecked} = this.props,

            wrapperClassName = classNames('button-radio', {
                activated: isChecked,
                [data.className]: data.className
            });

        return (
            <RaisedButton className={wrapperClassName}
                          theme={theme}
                          value={data.label}
                          disabled={disabled}
                          onTouchTap={this.touchTapHandler}/>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    ButtonRadio.propTypes = {

        /**
         * The ButtonCheckbox theme.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * Data for ButtonRadio.
         */
        data: PropTypes.shape({

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

        }).isRequired,

        disabled: PropTypes.bool,
        isChecked: PropTypes.bool,

        onTouchTap: PropTypes.func

    };

}

ButtonRadio.defaultProps = {
    disabled: false,
    isChecked: false
};

export default ButtonRadio;