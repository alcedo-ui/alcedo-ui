import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';
import Util from '../_vendors/Util';

import './MaterialDropdownSelect.css';

export default class MaterialDropdownSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isFocus: false
        };

        this.onFocusHandle = this::this.onFocusHandle;
        this.onBlurHandle = this::this.onBlurHandle;
        this.onChangeHandle = this::this.onChangeHandle;

    }


    onFocusHandle(e) {
        this.setState({
            isFocus: true
        }, () => {
            this.props.onFocus && this.props.onFocus(this.state.value, e);
        })
    }

    onBlurHandle(e) {
        this.setState({
            isFocus: false
        }, () => {
            this.props.onBlur && this.props.onBlur(this.state.value, e);
        })
    }

    onChangeHandle(value) {
        this.setState({
            value
        }, ()=> {
            this.props.onChange && this.props.onChange(value);
        })
    }

    render() {

        const {className, style} = this.props;
        const {isFocus, value} = this.state;

        return (
            <div className={`material-drop-down-select ${className ? className : ''}  ${isFocus ? 'focused' : ''}`}
                 style={style}>
                <DropdownSelect {...this.props}/>
            </div>
        );

    }
};

MaterialDropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

};

MaterialDropdownSelect.defaultProps = {};

