import React, {Component, PropTypes} from 'react';

import IconButton from '../IconButton';

import './Switcher.css';

export default class Switcher extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: !!props.value
        };

        this.toggle = this::this.toggle;

    }

    toggle() {

        const {disabled, isLoading, onChange} = this.props;
        const value = !this.state.value;

        !disabled && !isLoading && this.setState({
            value
        }, () => {
            onChange && onChange(value);
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

        const {className, style, disabled, isLoading, size} = this.props;
        const {value} = this.state;

        return (
            <div className={`switcher ${value == true ? 'active' : 'inactive'}
                    ${size === 'small' ? 'small' : ''} ${className}`}
                 style={style}
                 onClick={this.toggle}
                 disabled={disabled || isLoading}>

                <IconButton className="slider-wrapper">
                    <div className="slider">
                        {
                            isLoading
                                ? <i className="fa fa-spinner fa-pulse fa-3x fa-fw switcher-loading"></i>
                                : null
                        }
                    </div>
                </IconButton>

            </div>
        );

    }
};

Switcher.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    value: PropTypes.bool,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    size: PropTypes.string,

    onChange: PropTypes.func

};

Switcher.defaultProps = {

    className: '',
    style: null,

    value: false,
    disabled: false,
    isLoading: false,
    size: ''

};