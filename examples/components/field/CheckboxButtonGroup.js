import React, {Component, PropTypes} from 'react';

import 'sass/components/field/CheckboxButtonGroup.scss';

export default class CheckboxButtonGroup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, label, children} = this.props;

        return (
            <div className={`checkbox-button-group ${className}`}
                 style={style}>

                {
                    label ?
                        <label>{label}</label>
                        :
                        null
                }

                {children}

            </div>
        );

    }
};

CheckboxButtonGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    label: PropTypes.string

};

CheckboxButtonGroup.defaultProps = {

    className: '',
    style: null,

    label: ''

};