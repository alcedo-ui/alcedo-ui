import React, {Component, PropTypes} from 'react';

import RaisedButton from '../RaisedButton';

import './ToggleButton.css';

export default class ToggleButton extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: !!props.value
        };

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle() {
        const value = !this.state.value;
        this.setState({
            value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(value);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, text, disabled} = this.props;
        const {value} = this.state;

        return (
            <RaisedButton className={`toggle-button ${value ? 'activated' : ''} ${className}`}
                          style={style}
                          value={text}
                          disabled={disabled}
                          isRounded={true}
                          onTouchTap={this.clickHandle}/>
        );

    }
};

ToggleButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,

    onChange: PropTypes.func

};

ToggleButton.defaultProps = {

    className: '',
    style: null,

    name: '',
    text: '',
    value: false,
    disabled: false

};