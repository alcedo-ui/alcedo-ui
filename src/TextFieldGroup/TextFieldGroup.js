/**
 * @file TextFieldGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TextFieldGroup.css';

export default class TextFieldGroup extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style} = this.props;

        return (
            <div className={`text-field-group ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};

TextFieldGroup.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

TextFieldGroup.defaultProps = {
    className: '',
    style: null
};