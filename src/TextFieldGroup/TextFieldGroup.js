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

        const {children, className, style} = this.props;

        return (
            <div className={classNames('text-field-group', {
                [className]: className
            })}
                 style={style}>
                {children}
            </div>
        );

    }
}

TextFieldGroup.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object

};

export default TextFieldGroup;
