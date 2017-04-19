import React, {Component, PropTypes} from 'react';

import './TextFieldGroup.css';

export default class TextFieldGroup extends Component {

    constructor(props) {
        super(props);
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