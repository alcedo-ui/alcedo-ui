import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import TipContainer from 'dist/TipContainer';

import './Radio.css';

export default class Radio extends Component {

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

        let {value} = this.state;

        if (value) {
            return;
        }

        this.setState({
            value: true
        }, () => {
            this.props.onChange && this.props.onChange(true);
        });

    }

    mouseDownHandle(e) {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.startRipple(e);
        this.clickHandle();

    }

    mouseUpHandle() {

        if (this.props.disabled) {
            return;
        }

        this.refs.radioIcon.endRipple();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, label, disabled, tip, tipPosition} = this.props,
            {value} = this.state;

        return (
            <TipContainer className='block'
                          text={tip}
                          tipPosition={tipPosition}>
                <div className={`radio ${value ? 'activated' : ''} ${className}`}
                     style={style}
                     disabled={disabled}>

                    <input type="hidden"
                           name={name}
                           value={value}/>

                    <div className="radio-icon-wrapper">
                        <IconButton ref="radioIcon"
                                    className="radio-bg-icon"
                                    iconCls="fa fa-circle-o"
                                    onTouchTap={this.clickHandle}
                                    disabled={disabled}/>

                        <IconButton className="radio-icon"
                                    iconCls="fa fa-dot-circle-o"
                                    onTouchTap={this.clickHandle}
                                    disabled={disabled}/>
                    </div>

                    <div className="radio-label"
                         onMouseDown={this.mouseDownHandle}
                         onMouseUp={this.mouseUpHandle}>
                        {label}
                    </div>

                </div>
            </TipContainer>
        );

    }
};

Radio.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The name of the radio.
     */
    name: PropTypes.string,

    /**
     * Label for radio.
     */
    label: PropTypes.any,

    /**
     * If true,the radio will be checked.
     */
    value: PropTypes.bool,

    /**
     * If true, the radio will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the radio status change.
     */
    onChange: PropTypes.func

};

Radio.defaultProps = {

    className: '',
    style: null,

    name: '',
    label: '',
    value: false,
    disabled: false

};