import React, {Component, PropTypes} from 'react';

import 'sass/components/field/TextFieldGroup.scss';

export default class TextFieldGroup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, disabled} = this.props;

        return (
            <div className={`text-field-group ${disabled ? 'disabled' : ''} ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};

TextFieldGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    disabled: PropTypes.bool

};

TextFieldGroup.defaultProps = {

    className: '',
    style: null,

    disabled: false

};