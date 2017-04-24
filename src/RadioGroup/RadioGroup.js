import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Radio from '../Radio';

export default class RadioGroup extends Component {

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
            <div className={`radio-group ${className}`}
                 style={style}
                 disabled={disabled}>

                {
                    data.map((item, index) => {

                        const isChecked = item.value === value;

                        return (
                            <Radio key={index}
                                   className={item.className ? item.className : ''}
                                   style={item.style}
                                   name={name}
                                   label={item.label}
                                   value={isChecked}
                                   onChange={() => {
                                       this.changeHandle(item);
                                   }}/>
                        );

                    })
                }

            </div>
        );

    }
};

RadioGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        label: PropTypes.any,
        value: PropTypes.any

    })).isRequired,
    value: PropTypes.any,
    disabled: PropTypes.bool,

    onChange: PropTypes.func

};

RadioGroup.defaultProps = {

    className: '',
    style: null,

    name: '',
    data: [],
    value: '',
    disabled: false

};