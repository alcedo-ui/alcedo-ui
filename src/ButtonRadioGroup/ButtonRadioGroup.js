import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';
import RaisedButton from '../RaisedButton';

import './ButtonRadioGroup.css';

export default class ButtonRadioGroup extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: props.value
        };

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(item) {
        this.setState({
            value: item.value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(item.value);
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

        const {className, style, name, disabled, data} = this.props;
        const {value} = this.state;

        return (
            <div className={`button-radio-group ${className}`}
                 style={style}
                 disabled={disabled}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={value}/>
                        :
                        null
                }

                {
                    data.map((item, index) => {

                        const isChecked = item.value === value,
                            className = (isChecked ? ' activated' : '') + (item.className ? ' ' + item.className : '');

                        return (
                            <RaisedButton key={index}
                                          className={'button-radio-group-item' + className}
                                          style={item.style}
                                          value={item.label}
                                          disabled={disabled || item.disabled}
                                          onTouchTap={() => {
                                              this.changeHandle(item);
                                          }}/>
                        );

                    })
                }

            </div>
        );

    }
};

ButtonRadioGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        label: PropTypes.any,
        value: PropTypes.any,

        disabled: PropTypes.bool

    })).isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,

    onChange: PropTypes.func

};

ButtonRadioGroup.defaultProps = {

    className: '',
    style: null,

    name: '',
    data: [],
    value: '',
    disabled: false

};