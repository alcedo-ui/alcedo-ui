/**
 * @file TextFieldGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextFieldGroup extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style} = this.props,

            groupClassName = classNames('text-field-group', {
                [className]: className
            });

        return (
            <div className={groupClassName}
                 style={style}>
                {children}
            </div>
        );

    }
}

TextFieldGroup.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default TextFieldGroup;