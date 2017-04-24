import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import './Checkbox.css';

export default class Checkbox extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: !!props.value
        };

        this.clickHandle = this::this.clickHandle;
        this.mouseDownHandle = this::this.mouseDownHandle;
        this.mouseUpHandle = this::this.mouseUpHandle;

    }

    clickHandle() {
        const value = !this.state.value;
        this.setState({
            value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(value);
        });
    }

    mouseDownHandle(e) {
        this.refs.checkboxIcon.startRipple(e);
        this.clickHandle();
    }

    mouseUpHandle() {
        this.refs.checkboxIcon.endRipple();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, label, disabled} = this.props;
        const {value} = this.state;

        return (
            <div className={`checkbox ${value ? 'activated' : ''} ${className}`}
                 style={style}
                 disabled={disabled}>

                {
                    name
                        ? <input type="hidden"
                                 name={name}
                                 value={value}/>
                        : null
                }

                <div className="checkbox-icon-wrapper">
                    <IconButton ref="checkboxIcon"
                                className="checkbox-bg-icon"
                                iconCls="fa fa-square-o"
                                onTouchTap={this.clickHandle}/>

                    <IconButton className="checkbox-icon"
                                iconCls="fa fa-check-square"
                                onTouchTap={this.clickHandle}/>
                </div>

                <div className="checkbox-label"
                     onMouseDown={this.mouseDownHandle}
                     onMouseUp={this.mouseUpHandle}>
                    {label}
                </div>

            </div>
        );

    }
};

Checkbox.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    label: PropTypes.any,
    value: PropTypes.bool,
    disabled: PropTypes.bool,

    onChange: PropTypes.func

};

Checkbox.defaultProps = {

    className: '',
    style: null,

    name: '',
    label: '',
    value: false,
    disabled: false

};