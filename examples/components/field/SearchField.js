import React, {Component, PropTypes} from 'react';

import TextField from 'components/field/TextField';

import 'sass/components/field/SearchField.scss';

export default class SearchField extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, placeholder, value, onChange} = this.props;

        return (
            <TextField className={`search-field ${className}`}
                       style={style}
                       placeholder={placeholder}
                       value={value}
                       iconCls="fa fa-search"
                       onChange={onChange}/>
        );

    }
};

SearchField.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    placeholder: PropTypes.string,
    value: PropTypes.string,

    onChange: PropTypes.func

};

SearchField.defaultProps = {

    className: '',
    style: null,

    placeholder: 'search ...',
    value: ''

};