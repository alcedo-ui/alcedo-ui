import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';
import TextField from '../TextField';

import './MaterialTextField.css';

export default class MaterialTextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            items: []
        };

    }



    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const {className, placeholder} = this.props;
        return (
            <div className={`material-text-field ${className ? className : ''}`}>
                <TextField placeholder={placeholder}/>
            </div>
        );
    }
};

MaterialTextField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,


};

MaterialTextField.defaultProps = {

};

