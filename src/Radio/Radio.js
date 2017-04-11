import React, {Component, PropTypes} from 'react';

import IconButton from '../IconButton';

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
            !this.props.disabled && this.props.onChange && this.props.onChange(true);
        });

    }

    mouseDownHandle(e) {
        this.refs.radioIcon.startRipple(e);
    }

    mouseUpHandle() {
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

        const {className, style, name, label, disabled} = this.props;
        const {value} = this.state;

        return (
            <div className={`radio ${value ? 'activated' : ''} ${className}`}
                 style={style}
                 disabled={disabled}
                 onMouseDown={this.mouseDownHandle}
                 onMouseUp={this.mouseUpHandle}>

                <input type="hidden"
                       name={name}
                       value={value}/>

                <IconButton ref="radioIcon"
                            className="radio-icon"
                            iconCls={`fa ${value ? 'fa-dot-circle-o' : 'fa-circle-o'}`}
                            onTouchTap={this.clickHandle}/>

                <div className="radio-label"
                     onMouseDown={this.clickHandle}>
                    {label}
                </div>

            </div>
        );

    }
};

Radio.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,

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